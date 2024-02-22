const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

export default function FormatDateToString(inputDate: string) {
  // This function needed to formating inputDate into 2 format:
  // - June 13, 2023
  // - 13-06-2023

  const d = new Date(inputDate)
  const formatDateList = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`
  const formatDate = `${
    monthNames[d.getMonth()]
  } ${d.getDate()}, ${d.getFullYear()}`

  return {formatDateList, formatDate}
}
