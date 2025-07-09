import { useRef, useImperativeHandle, forwardRef } from 'react';

type SeccionHandle = {
  hacerScroll: () => void;
};

const SeccionConScroll = forwardRef<SeccionHandle>((_, ref) => {
  const divRef = useRef<HTMLDivElement>(null);

  useImperativeHandle(ref, () => ({
    hacerScroll: () => {
      divRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }));

  return (
    <div
      ref={divRef}
      style={{ marginTop: '100vh', height: '200px', backgroundColor: 'tomato' }}
    >
      ¡Llegaste aquí con scroll!
    </div>
  );
});

export const PaginaScroll: React.FC = () => {
  const refSeccion = useRef<SeccionHandle>(null);

  return (
    <>
      <button onClick={() => refSeccion.current?.hacerScroll()}>Ir a sección</button>
      <SeccionConScroll ref={refSeccion} />
    </>
  );
};