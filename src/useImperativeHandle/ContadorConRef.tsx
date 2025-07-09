import { useRef, useImperativeHandle, forwardRef, useState } from 'react';

type ContadorHandle = {
  reiniciar: () => void;
};

const ContadorConRef = forwardRef<ContadorHandle>((_, ref) => {
  const [valor, setValor] = useState<number>(0);

  useImperativeHandle(ref, () => ({
    reiniciar: () => setValor(0)
  }));

  return (
    <>
      <p>Valor: {valor}</p>
      <button onClick={() => setValor(valor + 1)}>Sumar</button>
    </>
  );
});

export const PanelContadorConRef: React.FC = () => {
  const refContador = useRef<ContadorHandle>(null);

  return (
    <>
      <ContadorConRef ref={refContador} />
      <button onClick={() => refContador.current?.reiniciar()}>Reiniciar contador</button>
    </>
  );
};