
import { useState, useEffect } from 'react';

export default function DocumentTitleChanger() {
  const [title, setTitle] = useState('React App');
  const [input, setInput] = useState('');

  useEffect(() => {
    document.title = title;
  }, [title]);

  const updateTitle = () => {
    if (input.trim()) {
      setTitle(input);
      setInput('');
    }
  };

  return (
    <div>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Nuevo título"
      />
      <button onClick={updateTitle}>Actualizar título</button>
      <p>Título actual: {title}</p>
    </div>
  );
}
