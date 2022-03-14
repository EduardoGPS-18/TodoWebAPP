import styled from "styled-components";


type TightTextProps = {
  textAlignment?: 'center' | 'end' | 'justify' | 'left' | 'right' | 'start'
  title?: string
}
export default function TightText({title}: TightTextProps) {
  const Text = styled.p`
    font-size: 24px;
    font-weight: 100;
    color: #9A9A9A;
    align-self: center;
    text-align: ${({textAlignment}: TightTextProps) => textAlignment};
  `;

  return <Text>{title}</Text>
} 