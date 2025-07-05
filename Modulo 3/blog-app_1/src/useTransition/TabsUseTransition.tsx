import { useState, useTransition } from 'react';

const imagenes = Array.from({ length: 30 }, (_, i) => `https://picsum.photos/200/200?random=${i}`);

export default function GaleriaDiferida() {
  const [lista, setLista] = useState<string[]>([]);
  const [isPending, startTransition] = useTransition();

  const cargar = () => {
    startTransition(() => {
      setLista(imagenes);
    });
  };

  return (
    <>
      <button onClick={cargar}>Cargar galería</button>
      {isPending && <p>Cargando imágenes...</p>}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
        {lista.map((src, i) => (
          <img key={i} src={src} alt={`img-${i}`} width={100} height={100} />
        ))}
      </div>
    </>
  );
}