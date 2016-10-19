export const ddmmyyyyStrDate = function (dateString) {
  // dateString: string, format 'dd/mm/yyyy'
  // return: Date Object corresponding to the specified date
  return new Date(dateString.split('/')[2], dateString.split('/')[1], dateString.split('/')[0])
}
