import { useState, useTransition, type FC } from 'react';

export const ListaTransicion: FC = () => {
  const [listado, setListado] = useState<string[]>([]);
  const [isPending, startTransition] = useTransition();

  const generar = (): void => {
    startTransition(() => {
      const datos: string[] = Array.from({ length: 10000 }, (_, i: number): string => `Elemento ${i + 1}`);
      setListado(datos);
    });
  };

  return (
    <>
      <button onClick={generar}>Generar lista gigante</button>
      {isPending && <p>Renderizando elementos...</p>}
      <div style={{ maxHeight: '300px', overflowY: 'scroll', marginTop: '10px' }}>
        {listado.map((item: string, i: number) => (
          <p key={i}>{item}</p>
        ))}
      </div>
    </>
  );
};
