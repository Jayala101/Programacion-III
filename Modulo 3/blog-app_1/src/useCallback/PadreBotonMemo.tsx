
import { useCallback, useState } from 'react';
import BotonMemo from './BotonMemo';

export default function PadreBotonMemo() {
  const [valor, setValor] = useState<number>(0);

  const handleClick = useCallback(() => {
    console.log("Click desde BotonMemo");
  }, []);

  return (
    <>
      <p>Valor: {valor}</p>
      <button onClick={() => setValor(valor + 1)}>Incrementar</button>
      <BotonMemo onClick={handleClick} />
    </>
  );
}
