import { useState, useCallback } from 'react';

export default function Saludo() {
  const [nombre, setNombre] = useState("Ana");

  const saludar = useCallback(() => {
    alert("Hola " + nombre);
  }, [nombre]);

  return (
    <>
      <input value={nombre} onChange={e => setNombre(e.target.value)} />
      <button onClick={saludar}>Saludar</button>
    </>
  );
}
