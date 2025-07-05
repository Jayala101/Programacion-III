
import { useState, useTransition, type FC } from 'react';

const imagenes: string[] = Array.from(
  { length: 30 },
  (_: unknown, i: number): string => `https://picsum.photos/200/200?random=${i}`
);

export const GaleriaDiferida: FC = () => {
  const [lista, setLista] = useState<string[]>([]);
  const [isPending, startTransition] = useTransition();

  const cargar = (): void => {
    startTransition(() => {
      setLista(imagenes);
    });
  };

  return (
    <>
      <button onClick={cargar}>Cargar galería</button>
      {isPending && <p>Cargando imágenes...</p>}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
        {lista.map((src: string, i: number) => (
          <img key={i} src={src} alt={`img-${i}`} width={100} height={100} />
        ))}
      </div>
    </>
  );
};
