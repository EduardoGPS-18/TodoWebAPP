export function DateTimeFormatter(date?: Date) {
  const onlyNumberFormatDateOptions: Intl.DateTimeFormatOptions = {
    day:"2-digit",
    month: "2-digit",
    year: "numeric"
  }
  const onlyNumberFormatedDate = Intl.DateTimeFormat('pt-BR', onlyNumberFormatDateOptions).format(date)
  

  const formatDateOptions: Intl.DateTimeFormatOptions = {
    day:"2-digit",
    month: "short",
    year: "numeric"
  }
  const formatedDate = Intl.DateTimeFormat('pt-BR', formatDateOptions).format(date)
  
  const formatTimeOptions: Intl.DateTimeFormatOptions = {
    hour: "2-digit",
    minute: "2-digit"
  }
  const formatedTime = Intl.DateTimeFormat('pt-BR', formatTimeOptions).format(date)
  
  return {
    formatedDate,
    formatedTime,
    onlyNumberFormatedDate
  }
}