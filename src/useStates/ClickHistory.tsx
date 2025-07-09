
import { useState } from 'react';

export default function ClickHistory() {
  const [count, setCount] = useState(0);
   const [history, setHistory] = useState<string[]>([]); 

  const handleClick = () => {
    setCount(count + 1);
    setHistory([...history, `Clic ${count + 1}`]);
  };

  return (
    <div>
      <button onClick={handleClick}>Clic</button>
      <ul>
        {history.map((item, index) => <li key={index}>{item}</li>)}
      </ul>
    </div>
  );
}
