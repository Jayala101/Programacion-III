
import { useState, useMemo } from 'react';

const nombres = ["Ana", "Andrés", "Lucía", "Carlos", "Laura", "Luis", "Alberto"];

export default function FiltroLista() {
  const [busqueda, setBusqueda] = useState("");

  const filtrados = useMemo(() =>
    nombres.filter(n => n.toLowerCase().includes(busqueda.toLowerCase())),
    [busqueda]
  );

  return (
    <>
      <input
        placeholder="Buscar nombre"
        value={busqueda}
        onChange={e => setBusqueda(e.target.value)}
      />
      <ul>
        {filtrados.map((n, i) => <li key={i}>{n}</li>)}
      </ul>
    </>
  );
}
