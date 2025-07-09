import { useState } from 'react';

export default function SimpleForm() {
  const [name, setName] = useState('');

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    alert(`Hola, ${name}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Tu nombre"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button type="submit">Enviar</button>
    </form>
  );
}