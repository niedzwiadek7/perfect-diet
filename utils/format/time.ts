export const formatNumber = (value: number): String =>
  value % 60 >= 10
    ? `${value % 60}`
    : `0${value % 60}`

export const minutesFormat = (value: number): String => {
  const minutes: String = formatNumber(Math.floor(value / 60))
  const seconds: String = formatNumber(value % 60)
  return `${minutes}:${seconds}`
}
