
import { useState, useTransition } from 'react';
import type { ChangeEvent, FC } from 'react';

const datos: string[] = Array.from({ length: 10000 }, (_, i) => `Elemento ${i + 1}`);

export const BuscadorUseTransition: FC = () => {
  const [texto, setTexto] = useState<string>("");
  const [resultado, setResultado] = useState<string[]>([]);
  const [isPending, startTransition] = useTransition();

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    setTexto(value);

    startTransition(() => {
      const filtrados = datos.filter(item =>
        item.toLowerCase().includes(value.toLowerCase())
      );
      setResultado(filtrados);
    });
  }

  return (
    <>
      <input
        type="text"
        value={texto}
        onChange={handleChange}
        placeholder="Buscar..."
      />
      {isPending && <p>Filtrando...</p>}
      <ul>
        {resultado.slice(0, 10).map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
};
