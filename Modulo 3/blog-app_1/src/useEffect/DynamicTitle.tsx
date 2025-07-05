import { useEffect, useState } from 'react';

export default function DynamicTitle() {
  const [nombre, setNombre] = useState('');

  useEffect(() => {
    document.title = nombre ? `Hola, ${nombre}` : 'React App';
  }, [nombre]);

  return (
    <input
      placeholder="Escribe tu nombre"
      value={nombre}
      onChange={e => setNombre(e.target.value)}
    />
  );
}