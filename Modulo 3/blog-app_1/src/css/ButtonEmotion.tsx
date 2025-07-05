/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';

const Boton = styled.button`
  background-color: hotpink;
  color: white;
  padding: 10px 20px;
  border-radius: 8px;
  border: none;
`;

export const ButtonEmotion: React.FC = () => {
  return <Boton>Click Emotion </Boton>;
};
