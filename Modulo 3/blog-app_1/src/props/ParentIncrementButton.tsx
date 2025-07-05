import { useState } from "react";
import IncrementButton from "./IncrementButton";

export default function ParentIncrementButton() {
  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1);

  return (
    <>
      <p>Contador: {count}</p>
      <IncrementButton onIncrement={increment} />
    </>
  );
}