import { useState, useDeferredValue } from 'react';

const datos = Array.from({ length: 2000 }, (_, i) => ({ id: i, nombre: `Item ${i}` }));

export default function TablaDiferida() {
  const [filtro, setFiltro] = useState("");
  const filtroLento = useDeferredValue(filtro);

  const filas = datos.filter(d => d.nombre.includes(filtroLento));

  return (
    <>
      <input type="text" value={filtro} onChange={e => setFiltro(e.target.value)} placeholder="Filtrar..." />
      <table>
        <thead>
          <tr><th>ID</th><th>Nombre</th></tr>
        </thead>
        <tbody>
          {filas.slice(0, 50).map(f => (
            <tr key={f.id}><td>{f.id}</td><td>{f.nombre}</td></tr>
          ))}
        </tbody>
      </table>
    </>
  );
}