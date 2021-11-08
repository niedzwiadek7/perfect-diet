const defineProperty = (object: Object, key: string, value: any): void => {
  Object.defineProperty(object, key, {
    value,
    enumerable: true,
    writable: true,
    configurable: true
  })
}

export default defineProperty
