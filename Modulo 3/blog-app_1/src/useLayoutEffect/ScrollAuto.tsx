import { useLayoutEffect, useRef } from 'react';

export const ScrollAutoTS = () => {
  const contenedorRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const nodo = contenedorRef.current;
    if (nodo) {
      nodo.scrollTop = nodo.scrollHeight;
    }
  }, []);

  return (
    <div
      ref={contenedorRef}
      style={{
        height: '120px',
        overflowY: 'scroll',
        border: '1px solid gray',
        padding: '8px',
      }}
    >
      {Array.from({ length: 30 }, (_, i) => (
        <div key={i}>Línea #{i + 1}</div>
      ))}
    </div>
  );
};
