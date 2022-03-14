import { StyledCheckbox } from "./checkbox.style"

type CheckboxProps = {
  radius?: number
  value?: boolean
  onValueChanged?: (value: boolean) => void
}

export default function Checkbox({radius, value, onValueChanged}: CheckboxProps) {
  
  return <>
    <StyledCheckbox 
      radius={radius}
      isClickable={onValueChanged != null}
      onClick={onValueChanged != null ? () => {
        
        onValueChanged(!value)
        
        } : () => {}}>
        <svg visibility={value ? 'visible' : 'hidden'} width={`${(radius ?? 50) - 16}`} height={`${(radius ?? 50) - 16}`} viewBox={`0 0 24 23`} fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 12.9434L10.0588 20L21 3" stroke="#9A9A9A" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    </StyledCheckbox>
  </>
}