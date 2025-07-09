import { useState, useEffect, type JSX } from 'react';

export default function PersistCounter(): JSX.Element {
  const [count, setCount] = useState<number>(() => {
    const saved = localStorage.getItem('contador');
    return saved ? parseInt(saved, 10) : 0;
  });

  useEffect(() => {
    localStorage.setItem('contador', count.toString());
  }, [count]);

  return (
    <>
      <p>Contador persistente: {count}</p>
      <button onClick={() => setCount(count + 1)}>Incrementar</button>
    </>
  );
}
