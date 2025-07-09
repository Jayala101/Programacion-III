
import { useState, useEffect } from 'react';

export default function LogEffect() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Renderizado. Count: ", count);
  });

  return (
    <>
      <p>Valor: {count}</p>
      <button onClick={() => setCount(count + 1)}>Incrementar</button>
    </>
  );
}
