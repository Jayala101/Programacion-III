
import { useState, useMemo } from 'react';

const datos = [
  { id: 1, nombre: "Carlos" },
  { id: 2, nombre: "Ana" },
  { id: 3, nombre: "Beatriz" },
];

export default function TablaOrdenada() {
  const [asc, setAsc] = useState(true);

  const ordenados = useMemo(() => {
    console.log("Ordenando...");
    return [...datos].sort((a, b) =>
      asc
        ? a.nombre.localeCompare(b.nombre)
        : b.nombre.localeCompare(a.nombre)
    );
  }, [asc]);

  return (
    <>
      <button onClick={() => setAsc(!asc)}>
        Orden: {asc ? "A-Z" : "Z-A"}
      </button>
      <ul>
        {ordenados.map((d) => (
          <li key={d.id}>{d.nombre}</li>
        ))}
      </ul>
    </>
  );
}
