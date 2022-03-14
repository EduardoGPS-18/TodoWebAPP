import styled from "styled-components";

type SizedBoxProps = {
  height?: number
  width?: number
}

const SizedBox = styled.div`
  height: ${({height}: SizedBoxProps) => height+'px' };
  width: ${({width}: SizedBoxProps) => width+'px' };
`;

export { SizedBox };
