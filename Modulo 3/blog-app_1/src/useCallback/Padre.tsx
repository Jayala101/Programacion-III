import { useState, useCallback } from 'react';

interface HijoProps {
  onClick: () => void;
}

function Hijo({ onClick }: HijoProps) {
  console.log("Render Hijo");
  return <button onClick={onClick}>Click hijo</button>;
}

export default function Padre() {
  const [count, setCount] = useState<number>(0);

  const handleClick = useCallback(() => {
    alert("Hola desde el hijo");
  }, []);

  return (
    <>
      <p>Contador: {count}</p>
      <button onClick={() => setCount(count + 1)}>Incrementar</button>
      <Hijo onClick={handleClick} />
    </>
  );
}
