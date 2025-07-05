import { useState, useDeferredValue } from 'react';

const lista = ['Zorro', 'Árbol', 'Manzana', 'Tigre', 'Elefante', 'Ballena', 'Gato'];

export default function ListaOrdenada() {
  const [busqueda, setBusqueda] = useState('');
  const deferredBusqueda = useDeferredValue(busqueda);

  const filtrada = lista.filter(item => item.toLowerCase().includes(deferredBusqueda.toLowerCase()));
  const ordenada = [...filtrada].sort();

  return (
    <>
      <input type="text" value={busqueda} onChange={e => setBusqueda(e.target.value)} placeholder="Buscar y ordenar..." />
      <ul>
        {ordenada.map((item, i) => <li key={i}>{item}</li>)}
      </ul>
    </>
  );
}