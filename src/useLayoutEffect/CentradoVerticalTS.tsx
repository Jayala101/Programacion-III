import { useRef, useLayoutEffect } from 'react';

export const CentradoVerticalTS = () => {
  const refCaja = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    if (refCaja.current) {
      const altoVentana = window.innerHeight;
      const altoCaja = refCaja.current.offsetHeight;
      refCaja.current.style.marginTop = `${(altoVentana - altoCaja) / 2}px`;
    }
  }, []);

  return (
    <div
      ref={refCaja}
      style={{
        width: '200px',
        height: '100px',
        backgroundColor: 'steelblue',
        color: 'white',
        padding: '1rem',
      }}
    >
      Centrado verticalmente
    </div>
  );
};
