
import { useMemo, useState } from 'react';

function slowSquare(n: number) {
  console.log("Calculando...");
  for (let i = 0; i < 1e9; i++) {} // bucle lento
  return n * n;
}

export default function ExpensiveCalc() {
  const [number, setNumber] = useState(1);
  const [count, setCount] = useState(0);

  const result = useMemo(() => slowSquare(number), [number]);

  return (
    <>
      <p>Resultado: {result}</p>
      <input type="number" value={number} onChange={e => setNumber(+e.target.value)} />
      <button onClick={() => setCount(count + 1)}>Re-renderizar {count}</button>
    </>
  );
}
