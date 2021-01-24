export function formatDate (dateISOString) {
  // return date in dd.mm.yyyy format:
  const date = new Date(dateISOString)
  const day = date.getDate()
  const month = date.getMonth() + 1
  return `${day < 10 ? '0' + day : day}.${month < 10 ? '0' + month : month}.${date.getFullYear()}`
}
