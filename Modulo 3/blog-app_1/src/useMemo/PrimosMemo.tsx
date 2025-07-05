import { useMemo, useState } from 'react';

function generarPrimos(hasta: number): number[] {
  const primos: number[] = [];
  for (let i = 2; i <= hasta; i++) {
    if (primos.every(p => i % p !== 0)) {
      primos.push(i);
    }
  }
  return primos;
}

export default function PrimosMemo() {
  const [limite, setLimite] = useState(10000);
  const [, setRender] = useState(0);

  const primos = useMemo(() => generarPrimos(limite), [limite]);

  return (
    <>
      <input
        type="number"
        value={limite}
        onChange={e => setLimite(Number(e.target.value))}
      />
      <button onClick={() => setRender(r => r + 1)}>Re-renderizar</button>
      <p>Total primos: {primos.length}</p>
    </>
  );
}


