import { useEffect, useState } from "react"
import { StyledTextArea } from "./text-area.style"

type TextAreaProps = {
  maxLength?: number
  onChange?: (value: string) => void
  initialValue?: string
  placeHolder?: string
}

export default function TextArea({maxLength, onChange, initialValue, placeHolder}: TextAreaProps) {
  const [value, setValue] = useState(initialValue)
  
  useEffect(() => {
    onChange?.(value ?? '')
  }, [value])
  
  useEffect(() => {
    setValue(initialValue)
  }, [initialValue])

  return <StyledTextArea
  placeholder={placeHolder}
    onChange={(ev) => setValue(ev.target.value)}
    value={value}
  />
}