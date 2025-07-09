
import { useCallback } from 'react';

interface ListaProps {
  items: string[];
}

export default function ListaCallback({ items }: ListaProps) {
  const handleClick = useCallback((item: string) => {
    console.log("Seleccionado:", item);
  }, []);

  return (
    <ul>
      {items.map(item => (
        <li key={item}>
          <button onClick={() => handleClick(item)}>{item}</button>
        </li>
      ))}
    </ul>
  );
}
