import { StyledButton } from "./button.style"

type ButtonProps = {
  onPressed?: () => void
  inactive?: boolean
  text: string
  width?: string
  padding?: boolean
}

export default function Button({onPressed, inactive, text, width, padding}: ButtonProps) {

  return <>
    <StyledButton onClick={inactive ? () => {} : onPressed} inactive={inactive} width={width} padding={padding}>
      {text}
    </StyledButton>
  </>
}