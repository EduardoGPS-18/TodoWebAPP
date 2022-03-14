import { useEffect, useState } from 'react';
import { StyledInputDiv, StyledSingleLineInput, StyledSingleLineInputErrorText } from './input.style';

type InputProps = {
  onValueChanged?: (value: string) => void
  initialValue?: string
  errorText?: string|null
  placeholder?: string
  width?: string
  hidden?: boolean
  maxLength?: number
  pattern?: string
}
export default function Input({ 
  onValueChanged,
  initialValue,
  errorText,
  placeholder,
  width,
  pattern,
  hidden = false,
  maxLength = 20
}: InputProps) {
  const [value, setValue] = useState(initialValue ?? '');
  useEffect(() => {
    setValue(initialValue ?? '')
  }, [initialValue])
  
  const setValueWithValidation = (nValue: string) => {
    const lastValue = value
    setValue(nValue)
    if(nValue.length > maxLength) {
      setValue(lastValue) 
    }
  }
  const hasError = errorText !== null && errorText?.length !== 0;
  return <StyledInputDiv width={width}>
    <StyledSingleLineInput
      hasError={hasError}
      value={value}
      pattern={pattern}
      placeholder={placeholder}
      onChange={(ev) => {
        onValueChanged?.(ev.target.value)
        setValueWithValidation(ev.target.value)
      }}
      type={hidden ? "password" : "text"}
    />
    {hasError ? 
      <StyledSingleLineInputErrorText>
        {errorText ?? 'Campo inválido'}
      </StyledSingleLineInputErrorText>
      : null}
  </StyledInputDiv>;
}