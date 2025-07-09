import { useState, useCallback } from 'react';

export default function Contador() {
  const [count, setCount] = useState(0);

  const incrementar = useCallback(() => {
    setCount(c => c + 1);
  }, []);

  return <button onClick={incrementar}>Contador: {count}</button>;
}
