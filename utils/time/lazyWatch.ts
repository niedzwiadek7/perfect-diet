// control value must be function returned controlValue

const lazyWatch = async (value: any, time: number, controlValue: Function, func: Function) => {
  await new Promise(resolve => setTimeout(resolve, time))
  if (value === controlValue()) {
    func()
  }
}

export default lazyWatch
