
import { useState } from 'react';

export default function HoverFont() {
  const [hovered, setHovered] = useState(false);

  return (
    <p
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ fontFamily: hovered ? 'Courier New' : 'Arial' }}>
      Pasa el cursor sobre este texto
    </p>
  );
}
