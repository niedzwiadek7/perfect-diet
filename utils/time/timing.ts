export const timingMinutes = (date1: Date, date2: Date): number => {
  return Math.ceil(Math.abs((date1.valueOf() - date2.valueOf()) / 60000))
}

export const timingFullDays = (basicDate: Date, controlDate: Date): number => {
  const difference: number = basicDate.valueOf() - controlDate.valueOf()

  const hours: number = basicDate.getHours()
  const minutes: number = basicDate.getMinutes()
  const seconds: number = basicDate.getSeconds()
  const milliseconds: number = basicDate.getMilliseconds()
  const millisecondsInBasicDate = milliseconds + seconds * 1000 + minutes * 1000 * 60 + hours * 24 * 1000 * 60

  return Math.ceil((difference - millisecondsInBasicDate) / (1000 * 60 * 60 * 24))
}
