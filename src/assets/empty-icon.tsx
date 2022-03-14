import styled from "styled-components"

export default function EmptyIcon() {

  const StyledDivEmptyIcon = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 32px 0px;
  `

  return <StyledDivEmptyIcon>
    <svg width="159" height="128" viewBox="0 0 159 128" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M77.1904 0C84.5853 0 91.6854 1.26188 98.2872 3.58206L91.678 8.20992C87.0508 7.0032 82.1956 6.36088 77.1904 6.36088C47.3744 6.36088 22.8821 29.1547 20.1884 58.2674L13.5856 62.8908C13.9705 28.0914 42.2999 0 77.1904 0ZM77.1904 120.857C62.4789 120.857 49.0635 115.307 38.9231 106.188L33.5889 109.923C44.9751 120.646 60.3154 127.218 77.1904 127.218C112.321 127.218 140.799 98.7389 140.799 63.6088C140.799 54.6792 138.959 46.1794 135.638 38.4678L130.302 42.2036C132.97 48.8161 134.438 56.0409 134.438 63.6088C134.438 95.2259 108.808 120.857 77.1904 120.857ZM5.73576 116.57L158.608 9.52728L152.873 1.33575L0 108.378L5.73576 116.57Z" fill="#C4C4C4"/>
    </svg>
  </StyledDivEmptyIcon>
}
