// Button.tsx
import styled from 'styled-components';

const Boton = styled.button`
  background-color: violet;
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
`;

export const ButtonStyled: React.FC = () => {
  return <Boton>Click Styled</Boton>;
};
