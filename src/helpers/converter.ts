export const nl2br = (text: string) => {
  return text.replace(/\n/g, "<br/>")
}

export const formatStartToEnd = (start: string, end: string) => {
  const startDate = new Date(start)
  const endDate = new Date(end)

  const startYear = startDate.getFullYear()
  const startMonth = (startDate.getMonth() + 1).toString().padStart(2, "0")
  const startDay = startDate.getDate().toString().padStart(2, "0")
  const startHour = startDate.getHours().toString().padStart(2, "0")
  const startMinutes = startDate.getMinutes().toString().padStart(2, "0")
  const endYear = endDate.getFullYear()
  const endMonth = (endDate.getMonth() + 1).toString().padStart(2, "0")
  const endDay = endDate.getDate().toString().padStart(2, "0")
  const endHour = endDate.getHours().toString().padStart(2, "0")
  const endMinutes = endDate.getMinutes().toString().padStart(2, "0")

  // if the same day, return period yyyy/mm/dd, start hh:mm, end hh:mm
  // if not the same day, return period yyyy/mm/dd - yyyy/mm/dd, start hh:mm, end hh:mm
  // result is object with period, start, end
  if (startYear === endYear && startMonth === endMonth && startDay === endDay) {
    return {
      period: `${startYear}/${startMonth}/${startDay}`,
      start: `${startHour}:${startMinutes}`,
      end: `${endHour}:${endMinutes}`
    }
    } else {
      return {
        period: `${startYear}/${startMonth}/${startDay} - ${endYear}/${endMonth}/${endDay}`,
        start: `${startHour}:${startMinutes}`,
        end: `${endHour}:${endMinutes}`
      }
    }
}