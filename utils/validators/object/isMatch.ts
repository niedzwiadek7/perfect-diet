export enum TypeofResult {
  string = 'string',
  number = 'number',
  boolean = 'boolean',
  function = 'function',
  object = 'object',
  undefined = 'undefined'
}

const elementMatch = (arg: any, typeofExpected: TypeofResult): boolean => {
  // eslint-disable-next-line valid-typeof
  return arg && typeof arg === typeofExpected
}

const isMatch = (arg: any, comparableTemplate: Record<string, TypeofResult>): boolean => {
  if (!arg) {
    return false
  }

  for (const [key] of Object.entries(comparableTemplate)) {
    if (!elementMatch(arg[key], comparableTemplate[key])) {
      return false
    }
  }
  return true
}

export default isMatch
