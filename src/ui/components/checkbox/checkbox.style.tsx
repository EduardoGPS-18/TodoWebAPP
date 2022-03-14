import styled from "styled-components"

type StyledCheckboxProps = {
  radius?: number
  isClickable: boolean
}

const StyledCheckbox = styled.div`
  width: ${({radius}: StyledCheckboxProps) => `${radius}px`};
  height: ${({radius}: StyledCheckboxProps) => `${radius}px`};

  background-color: white;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  :hover{
    cursor: ${({isClickable}: StyledCheckboxProps) => isClickable ? 'pointer': 'default'};
  }

  border: 1px solid #9A9A9A;
  border-radius: ${({radius}: StyledCheckboxProps) => `${((radius ?? 1) / 3)}px`};
  
  :active {
    border-color:${({isClickable}: StyledCheckboxProps) => isClickable ? '#dbdbdb': 'default'};
    svg path {
      stroke:${({isClickable}: StyledCheckboxProps) => isClickable ? '#dbdbdb': 'default'};
    }
  }
`

export {
  StyledCheckbox
}
