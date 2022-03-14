import styled from "styled-components"

const StyledAuthCardDiv = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 400px;
  width: 60vh;

  justify-content: center;
  align-content: center;

  padding: 16px;
  border: 1px solid #9A9A9A;
  border-radius: 15px;
  background-color: #C4C4C4;
  box-shadow: 4px 4px 10px #9A9A9A;

  * {
    padding: 12px 16px;
  }
`

const StyledAuthCardTitle = styled.h1`
  text-align: center;
  color: white;
  font-weight: 300;
  font-size: 32px;
`

const StyledAuthCardCenterDiv = styled.div`
  display: flex;
  flex-direction: column;
  
  height: 100vh;
  min-width: 450px;

  justify-content: center;
  align-items: center;
`

export {
  StyledAuthCardDiv,
  StyledAuthCardCenterDiv,
  StyledAuthCardTitle
}
