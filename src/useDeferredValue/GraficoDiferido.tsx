import { useState, useDeferredValue } from 'react';

const datos = Array.from({ length: 200 }, (_, i) => ({ categoria: i % 2 === 0 ? 'A' : 'B', valor: i }));

export default function GraficoDiferido() {
  const [categoria, setCategoria] = useState("A");
  const categoriaDiferida = useDeferredValue(categoria);

  const filtrado = datos.filter(d => d.categoria === categoriaDiferida);

  return (
    <>
      <select value={categoria} onChange={e => setCategoria(e.target.value)}>
        <option value="A">Categoría A</option>
        <option value="B">Categoría B</option>
      </select>
      <div style={{ display: 'flex', gap: '4px', marginTop: '10px' }}>
        {filtrado.slice(0, 20).map((d, i) => (
          <div key={i} style={{ width: 10, height: d.valor, backgroundColor: 'teal' }} />
        ))}
      </div>
    </>
  );
}