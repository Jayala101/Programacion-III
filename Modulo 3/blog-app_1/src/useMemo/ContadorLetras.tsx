import { useState, useMemo } from 'react';

type LetrasContadas = Record<string, number>;

export default function ContadorLetras() {
  const [texto, setTexto] = useState<string>('');
  const [contador, setContador] = useState<number>(0);

  const resumen = useMemo<LetrasContadas>(() => {
    const letras: LetrasContadas = {};
    for (const char of texto.toLowerCase()) {
      if (char >= 'a' && char <= 'z') {
        letras[char] = (letras[char] || 0) + 1;
      }
    }
    return letras;
  }, [texto]);

  return (
    <>
      <textarea
        rows={4}
        cols={40}
        placeholder="Escribe algo..."
        value={texto}
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setTexto(e.target.value)}
      />
      <button onClick={() => setContador(contador + 1)}>Re-renderizar</button>
      <pre>{JSON.stringify(resumen, null, 2)}</pre>
    </>
  );
}


