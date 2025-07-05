import { useState } from 'react';

export default function TextInput() {
  const [text, setText] = useState("");
  return (
    <input
      type="text"
      value={text}
      onChange={e => setText(e.target.value)}
      placeholder="Escribe algo"
    />

  );
}
