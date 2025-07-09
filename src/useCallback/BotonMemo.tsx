
import { memo } from 'react';

interface BotonMemoProps {
  onClick: () => void;
}

function Boton({ onClick }: BotonMemoProps) {
  console.log("Render Botón");
  return <button onClick={onClick}>Botón memoizado</button>;
}

const BotonMemo = memo(Boton);

export default BotonMemo;
