
import { useState } from 'react';

export default function DynamicColor() {
  const [red, setRed] = useState(false);

  return (
    <p style={{ color: red ? 'red' : 'blue' }} onClick={() => setRed(!red)}>
      Haz clic para cambiar el color
    </p>
  );
}
