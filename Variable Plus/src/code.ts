declare const __html__: string
declare const figma: any

type VariableAlias = { type: 'VARIABLE_ALIAS'; id: string }
type RGBA = { r: number; g: number; b: number; a?: number }
type VariableValue = boolean | number | string | RGBA | VariableAlias
type VariableValueLike = VariableValue | null | undefined | unknown

type Variable = {
  id: string
  name: string
  variableCollectionId: string
  resolvedType: string
  valuesByMode: Record<string, VariableValueLike>
  setValueForMode(modeId: string, value: VariableValue): void
}

type VariableCollection = {
  id: string
  name: string
  modes: { modeId: string; name: string }[]
}

const TOOL_ID = 'variable-plus'
const DISPLAY_NAME = 'Variable Plus'

figma.root.setRelaunchData({ [TOOL_ID]: DISPLAY_NAME })
figma.showUI(__html__, { width: 620, height: 760, title: DISPLAY_NAME })

type VarInfo = {
  id: string
  name: string
  collection: string
  resolvedType: string
  values: Record<string, string>
  isAlias: boolean
  aliasTargetName: string | null
}

type DuplicateGroup = {
  key: string
  resolvedType: string
  valueLabel: string
  variables: VarInfo[]
  canonicalName: string | null
}

function isAliasValue(v: unknown): v is VariableAlias {
  return typeof v === 'object' && v !== null && 'type' in v && (v as VariableAlias).type === 'VARIABLE_ALIAS'
}

function isRGBAValue(v: unknown): v is RGBA {
  return typeof v === 'object' && v !== null && 'r' in v && 'g' in v && 'b' in v
}

function serializeValue(v: VariableValueLike): string {
  if (v === null || v === undefined) return String(v)
  if (typeof v === 'boolean' || typeof v === 'number' || typeof v === 'string') return JSON.stringify(v)
  if (isAliasValue(v)) {
    return `alias:${v.id}`
  }
  if (isRGBAValue(v)) {
    const c = v as RGBA
    const a = typeof c.a === 'number' ? c.a : 1
    return `rgba(${c.r.toFixed(4)},${c.g.toFixed(4)},${c.b.toFixed(4)},${a.toFixed(4)})`
  }
  return JSON.stringify(v)
}

function formatValueLabel(v: VariableValueLike): string {
  if (typeof v === 'boolean') return String(v)
  if (typeof v === 'number') return String(v)
  if (typeof v === 'string') return `"${v}"`
  if (isRGBAValue(v)) {
    const c = v as RGBA
    const toHex = (n: number) => Math.round(n * 255).toString(16).padStart(2, '0')
    const a = typeof c.a === 'number' ? c.a : 1
    if (a < 1) return `#${toHex(c.r)}${toHex(c.g)}${toHex(c.b)}${toHex(a)}`
    return `#${toHex(c.r)}${toHex(c.g)}${toHex(c.b)}`
  }
  if (isAliasValue(v)) {
    return 'alias'
  }
  return JSON.stringify(v)
}

async function scan(highlightCanonicalId?: string) {
  const variables = await figma.variables.getLocalVariablesAsync()
  const collections = await figma.variables.getLocalVariableCollectionsAsync()
  const collectionMap = new Map<string, string>()
  for (const c of collections) collectionMap.set(c.id, c.name)

  const groups = new Map<string, { resolvedType: string; firstValue: VariableValue; rawValue: VariableValue | null; vars: VarInfo[] }>()

  const allVarsById = new Map<string, Variable>()
  for (const v of variables) allVarsById.set(v.id, v)

  function resolveRawGroupKey(v: Variable): { key: string; isAlias: boolean; aliasTargetId: string | null; aliasTargetName: string | null } {
    const modeEntries = Object.entries(v.valuesByMode)
    let isAlias = false
    let aliasTargetId: string | null = null
    let aliasTargetName: string | null = null

    for (const [, val] of modeEntries) {
      if (typeof val === 'object' && val !== null && 'type' in val && (val as VariableAlias).type === 'VARIABLE_ALIAS') {
        isAlias = true
        aliasTargetId = (val as VariableAlias).id
        const target = allVarsById.get(aliasTargetId)
        if (target) aliasTargetName = target.name
        break
      }
    }

    if (isAlias && aliasTargetId) {
      const target = allVarsById.get(aliasTargetId)
      if (target) {
        const targetEntries = Object.entries(target.valuesByMode)
        const targetSerialized = targetEntries.map(([, val]) => serializeValue(val)).join('||')
        return { key: `${v.variableCollectionId}::${target.resolvedType}::${targetSerialized}`, isAlias, aliasTargetId, aliasTargetName }
      }
    }

    const serialized = modeEntries.map(([, val]) => serializeValue(val)).join('||')
    return { key: `${v.variableCollectionId}::${v.resolvedType}::${serialized}`, isAlias, aliasTargetId, aliasTargetName }
  }

  for (const v of variables) {
    const modeEntries = Object.entries(v.valuesByMode)
    const serializedValues: Record<string, string> = {}
    for (const [modeId, val] of modeEntries) {
      serializedValues[modeId] = serializeValue(val)
    }

    const resolved = resolveRawGroupKey(v)
    const groupKey = resolved.key

    const info: VarInfo = {
      id: v.id,
      name: v.name,
      collection: collectionMap.get(v.variableCollectionId) || 'Unknown',
      resolvedType: v.resolvedType,
      values: serializedValues,
      isAlias: resolved.isAlias,
      aliasTargetName: resolved.aliasTargetName,
    }

    let rawValue: VariableValue | null = null
    if (resolved.isAlias && resolved.aliasTargetId) {
      const target = allVarsById.get(resolved.aliasTargetId)
      if (target) {
        const targetEntries = Object.entries(target.valuesByMode)
        if (targetEntries.length > 0) rawValue = targetEntries[0][1] as VariableValue
      }
    }

    const existing = groups.get(groupKey)
    if (existing) {
      existing.vars.push(info)
      if (rawValue && !existing.rawValue) existing.rawValue = rawValue
    } else {
      groups.set(groupKey, {
        resolvedType: v.resolvedType,
        firstValue: modeEntries.length > 0 ? (modeEntries[0][1] as VariableValue) : 0,
        rawValue,
        vars: [info],
      })
    }
  }

  const duplicates: DuplicateGroup[] = []
  for (const [key, g] of groups) {
    if (g.vars.length < 2) continue
    const aliasTargetIds = new Set<string>()
    for (const v of g.vars) {
      if (v.isAlias && v.aliasTargetName) {
        const target = g.vars.find(t => t.name === v.aliasTargetName && !t.isAlias)
        if (target) aliasTargetIds.add(target.id)
      }
    }

    g.vars.sort((a, b) => {
      if (highlightCanonicalId) {
        if (a.id === highlightCanonicalId) return -1
        if (b.id === highlightCanonicalId) return 1
      }
      const aIsTarget = aliasTargetIds.has(a.id)
      const bIsTarget = aliasTargetIds.has(b.id)
      if (aIsTarget !== bIsTarget) return aIsTarget ? -1 : 1
      if (a.isAlias === b.isAlias) return 0
      return a.isAlias ? 1 : -1
    })
    const canonical = g.vars.find(v => !v.isAlias)
    duplicates.push({
      key,
      resolvedType: g.resolvedType,
      valueLabel: formatValueLabel(g.rawValue ?? g.firstValue),
      variables: g.vars,
      canonicalName: canonical ? canonical.name : null,
    })
  }

  duplicates.sort((a, b) => b.variables.length - a.variables.length)

  figma.ui.postMessage({ type: 'scan-result', duplicates, totalVars: variables.length, highlightCanonicalId })
}

async function applyAlias(keepId: string, aliasIds: string[]) {
  const keepVar = await figma.variables.getVariableByIdAsync(keepId)
  if (!keepVar) {
    figma.notify('Could not find the selected variable')
    return
  }
  const alias = await figma.variables.createVariableAliasByIdAsync(keepId)
  let count = 0
  for (const id of aliasIds) {
    const v = await figma.variables.getVariableByIdAsync(id)
    if (!v) continue
    const collection = await figma.variables.getVariableCollectionByIdAsync(v.variableCollectionId)
    if (!collection) continue
    for (const mode of collection.modes) {
      v.setValueForMode(mode.modeId, alias)
    }
    count++
  }
  figma.notify(`Aliased ${count} variable${count !== 1 ? 's' : ''} to "${keepVar.name}"`)
  await scan(keepId)
}

async function detachAlias(varId: string) {
  const v = await figma.variables.getVariableByIdAsync(varId)
  if (!v) {
    figma.notify('Could not find the variable')
    return
  }
  const collection = await figma.variables.getVariableCollectionByIdAsync(v.variableCollectionId)
  if (!collection) return
  let detached = false
  for (const mode of collection.modes) {
    const val = v.valuesByMode[mode.modeId]
    if (typeof val === 'object' && val !== null && 'type' in val && (val as VariableAlias).type === 'VARIABLE_ALIAS') {
      const target = await figma.variables.getVariableByIdAsync((val as VariableAlias).id)
      if (target) {
        const targetCollection = await figma.variables.getVariableCollectionByIdAsync(target.variableCollectionId)
        if (targetCollection) {
          const targetVal = target.valuesByMode[targetCollection.modes[0]?.modeId]
          if (targetVal !== undefined) {
            v.setValueForMode(mode.modeId, targetVal)
            detached = true
          }
        }
      }
    }
  }
  if (detached) {
    figma.notify(`Detached "${v.name}" from its alias`)
  } else {
    figma.notify(`"${v.name}" is not aliased`)
  }
  await scan()
}

async function detachAll(varIds: string[]) {
  let count = 0
  for (const varId of varIds) {
    const v = await figma.variables.getVariableByIdAsync(varId)
    if (!v) continue
    const collection = await figma.variables.getVariableCollectionByIdAsync(v.variableCollectionId)
    if (!collection) continue
    for (const mode of collection.modes) {
      const val = v.valuesByMode[mode.modeId]
      if (typeof val === 'object' && val !== null && 'type' in val && (val as VariableAlias).type === 'VARIABLE_ALIAS') {
        const target = await figma.variables.getVariableByIdAsync((val as VariableAlias).id)
        if (target) {
          const targetCollection = await figma.variables.getVariableCollectionByIdAsync(target.variableCollectionId)
          if (targetCollection) {
            const targetVal = target.valuesByMode[targetCollection.modes[0]?.modeId]
            if (targetVal !== undefined) {
              v.setValueForMode(mode.modeId, targetVal)
              count++
            }
          }
        }
      }
    }
  }
  figma.notify(`Detached ${count} variable${count !== 1 ? 's' : ''}`)
  await scan()
}

type BulkSearchResult = {
  id: string
  name: string
  collection: string
  collectionId: string
  resolvedType: string
  valueLabel: string
  isAlias: boolean
  aliasTargetName: string | null
  modes: { modeId: string; modeName: string; value: string; rawValue: VariableValue }[]
}

async function searchVariables(query: string, searchBy: string) {
  const variables = await figma.variables.getLocalVariablesAsync()
  const collections = await figma.variables.getLocalVariableCollectionsAsync()
  const collectionMap = new Map<string, VariableCollection>()
  for (const c of collections) collectionMap.set(c.id, c)

  const lowerQuery = query.toLowerCase()

  const matched = lowerQuery.length === 0 ? variables : variables.filter((v: Variable) => {
    if (searchBy === 'name') {
      return v.name.toLowerCase().includes(lowerQuery)
    } else if (searchBy === 'value') {
      const modeEntries = Object.values(v.valuesByMode)
      return modeEntries.some(val => formatValueLabel(val).toLowerCase().includes(lowerQuery))
    } else {
      const nameMatch = v.name.toLowerCase().includes(lowerQuery)
      if (nameMatch) return true
      const modeEntries = Object.values(v.valuesByMode)
      return modeEntries.some(val => formatValueLabel(val).toLowerCase().includes(lowerQuery))
    }
  })

  const results: BulkSearchResult[] = []

  const allVarsById = new Map<string, Variable>()
  for (const va of variables) allVarsById.set(va.id, va)

  for (const v of matched) {
    const col = collectionMap.get(v.variableCollectionId)
    if (!col) continue
    const modes: BulkSearchResult['modes'] = []
    let isAlias = false
    let aliasTargetName: string | null = null
    for (const mode of col.modes) {
      const val = v.valuesByMode[mode.modeId]
      if (!isAlias && typeof val === 'object' && val !== null && 'type' in val && (val as VariableAlias).type === 'VARIABLE_ALIAS') {
        isAlias = true
        const target = allVarsById.get((val as VariableAlias).id)
        if (target) aliasTargetName = target.name
      }
      modes.push({
        modeId: mode.modeId,
        modeName: mode.name,
        value: formatValueLabel(val),
        rawValue: val,
      })
    }
    results.push({
      id: v.id,
      name: v.name,
      collection: col.name,
      collectionId: col.id,
      resolvedType: v.resolvedType,
      valueLabel: modes.length > 0 ? modes[0].value : '',
      isAlias,
      aliasTargetName,
      modes,
    })
  }

  figma.ui.postMessage({ type: 'search-result', results, total: matched.length, totalVars: variables.length })
}

async function bulkRename(varIds: string[], newName: string, mode: string) {
  let count = 0
  for (const id of varIds) {
    const v = await figma.variables.getVariableByIdAsync(id)
    if (!v) continue
    if (mode === 'replace') {
      v.name = newName
    } else if (mode === 'prefix') {
      v.name = newName + v.name
    } else if (mode === 'suffix') {
      v.name = v.name + newName
    }
    count++
  }
  figma.notify(`Renamed ${count} variable${count !== 1 ? 's' : ''}`)
}

async function refreshResultsByIds(varIds: string[]) {
  const collections = await figma.variables.getLocalVariableCollectionsAsync()
  const collectionMap = new Map<string, VariableCollection>()
  for (const c of collections) collectionMap.set(c.id, c)

  const allVars = await figma.variables.getLocalVariablesAsync()
  const allVarsById2 = new Map<string, Variable>()
  for (const va of allVars) allVarsById2.set(va.id, va)

  const results: BulkSearchResult[] = []
  for (const id of varIds) {
    const v = await figma.variables.getVariableByIdAsync(id)
    if (!v) continue
    const col = collectionMap.get(v.variableCollectionId)
    if (!col) continue
    const modes: BulkSearchResult['modes'] = []
    let isAlias = false
    let aliasTargetName: string | null = null
    for (const mode of col.modes) {
      const val = v.valuesByMode[mode.modeId]
      if (!isAlias && typeof val === 'object' && val !== null && 'type' in val && (val as VariableAlias).type === 'VARIABLE_ALIAS') {
        isAlias = true
        const target = allVarsById2.get((val as VariableAlias).id)
        if (target) aliasTargetName = target.name
      }
      modes.push({
        modeId: mode.modeId,
        modeName: mode.name,
        value: formatValueLabel(val),
        rawValue: val,
      })
    }
    results.push({
      id: v.id,
      name: v.name,
      collection: col.name,
      collectionId: col.id,
      resolvedType: v.resolvedType,
      valueLabel: modes.length > 0 ? modes[0].value : '',
      isAlias,
      aliasTargetName,
      modes,
    })
  }
  figma.ui.postMessage({ type: 'search-result', results, total: results.length, preserveSelection: true })
}

async function bulkSetValue(varIds: string[], newValueRaw: string, resolvedType: string) {
  let newValue: VariableValue
  if (resolvedType === 'COLOR') {
    const hex = newValueRaw.replace('#', '')
    const r = parseInt(hex.slice(0, 2), 16) / 255
    const g = parseInt(hex.slice(2, 4), 16) / 255
    const b = parseInt(hex.slice(4, 6), 16) / 255
    const a = hex.length === 8 ? parseInt(hex.slice(6, 8), 16) / 255 : 1
    newValue = { r, g, b, a }
  } else if (resolvedType === 'FLOAT') {
    newValue = Number(newValueRaw)
    if (isNaN(newValue as number)) {
      figma.notify('Invalid number value')
      return
    }
  } else if (resolvedType === 'BOOLEAN') {
    newValue = newValueRaw.toLowerCase() === 'true'
  } else {
    newValue = newValueRaw
  }

  let count = 0
  for (const id of varIds) {
    const v = await figma.variables.getVariableByIdAsync(id)
    if (!v) continue
    const collection = await figma.variables.getVariableCollectionByIdAsync(v.variableCollectionId)
    if (!collection) continue
    for (const mode of collection.modes) {
      v.setValueForMode(mode.modeId, newValue)
    }
    count++
  }

  figma.notify(`Updated ${count} variable${count !== 1 ? 's' : ''}`)
}

figma.ui.onmessage = async (msg: { type: string; [key: string]: unknown }) => {
  if (msg.type === 'resize') {
    figma.ui.resize(620, Math.max(200, Math.min(900, Math.round(msg.height as number))))
    return
  }
  if (msg.type === 'scan') {
    await scan()
  }
  if (msg.type === 'apply-alias') {
    await applyAlias(msg.keepId as string, msg.aliasIds as string[])
  }
  if (msg.type === 'detach-alias') {
    await detachAlias(msg.varId as string)
  }
  if (msg.type === 'detach-all') {
    await detachAll(msg.varIds as string[])
  }
  if (msg.type === 'search-vars') {
    await searchVariables(msg.query as string, msg.searchBy as string)
  }
  if (msg.type === 'bulk-rename') {
    await bulkRename(msg.varIds as string[], msg.newName as string, msg.renameMode as string)
    await refreshResultsByIds(msg.resultIds as string[])
  }
  if (msg.type === 'bulk-set-value') {
    await bulkSetValue(msg.varIds as string[], msg.newValue as string, msg.resolvedType as string)
    await refreshResultsByIds(msg.resultIds as string[])
  }
}

scan()
