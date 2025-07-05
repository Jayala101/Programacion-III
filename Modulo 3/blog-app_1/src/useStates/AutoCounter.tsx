
import { useState, useEffect } from 'react';

export default function AutoCounter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setCount((c) => c + 1), 1000);
    return () => clearInterval(id);
  }, []);

  return <p>Contador automático: {count}</p>;
}
