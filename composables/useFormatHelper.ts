export const useFormatHelper = () => {
  const msToTime = (duration: number | undefined) => {
    if (typeof duration !== "number") {
      return "00h 00m 00s" // Return a default value if duration is undefined
    }

    const seconds = Math.floor((duration / 1000) % 60)
    const minutes = Math.floor((duration / (1000 * 60)) % 60)
    const hours = Math.floor(duration / (1000 * 60 * 60))

    const formatNumber = (num: number) => (num < 10 ? `0${num}` : num)

    return `${formatNumber(hours)}h ${formatNumber(minutes)}m ${formatNumber(
      seconds
    )}s`
  }
  const msToTimeShort = (duration: number | undefined) => {
    if (typeof duration !== "number") {
      return "00:00" // Return a default value if duration is undefined
    }

    const seconds = Math.floor((duration / 1000) % 60)
    const minutes = Math.floor(duration / (1000 * 60))

    const formatNumber = (num: number) => (num < 10 ? `0${num}` : num)

    return `${formatNumber(minutes)}:${formatNumber(seconds)}`
  }
  return { msToTime, msToTimeShort }
}
