
import { useState } from 'react';

export default function MultiSwitch() {
  const [switches, setSwitches] = useState({ A: false, B: false, C: false });

  return (
    <div>
      {Object.entries(switches).map(([key, val]) => (
        <div key={key}>
          <label>
            <input
              type="checkbox"
              checked={val}
              onChange={() => setSwitches({ ...switches, [key]: !val })}
            />
            Switch {key}
          </label>
        </div>
      ))}
    </div>
  );
}
