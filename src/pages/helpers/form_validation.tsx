enum ValidationError {
  noError, invalidField
}
const validateForm = (errors?: string[], values?: string[]) => {
  if(values && errors) {
    const filteredErrors = errors.filter((value) => value !== '')
    if(filteredErrors.length === 0) {
      return ValidationError.noError
    } else {
      return ValidationError.invalidField
    }
  }
}

const emailValidator = (email?: string) => {
  if(email !== undefined){
    if((/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) && email.length > 0) {
      return ValidationError.noError
    } else {
      return ValidationError.invalidField
    }
  }
  return ValidationError.invalidField
}

const lengthValidator = (minLength: number, value?: string) => {
  if(value !== undefined) {
    if(value.length >= minLength) {
      return ValidationError.noError
    } else {
      return ValidationError.invalidField
    }
  }
  return ValidationError.noError
}

const dateValidator = (date: string) => {
  const selectedDate = (new RegExp('([0-9]{2}\/[0-9]{2}\/[0-9]{4})$').exec(date) ?? [])[0]
  if((selectedDate ?? [])[0] != null) {
    const [day, month, year] = (selectedDate ?? "").split('/')
    const validYear = Number(year) > 2000 && Number(year) <= 2050
    const validMonth = Number(month) >= 1 && Number(month) <= 12
    const validDay = Number(day) >= 1 && Number(day) <= 31
    if(validYear && validMonth && validDay) {
      return ValidationError.noError
    }
    return ValidationError.invalidField
  } else {
    return ValidationError.invalidField
  }
}

const timeValidator = (time: string) => {
  if(/[0-9]{2}:[0-9]{2}$/.test(time)) {
    const [hour, min] = time.split(':')
    const isValidHour = Number(hour) >= 0 && Number(hour) <= 24
    const isValidMin = Number(min) >= 0 && Number(min) <= 60
    if(isValidHour && isValidMin) {
      return ValidationError.noError
    }
    return ValidationError.invalidField
  }
  return ValidationError.invalidField
}

const isSameValue = (v1: any, v2: any) => {
  return v1 === v2 ? ValidationError.noError : ValidationError.invalidField
}

export {
  ValidationError,
  validateForm,
  emailValidator,
  isSameValue,
  dateValidator,
  timeValidator,
  lengthValidator
}
