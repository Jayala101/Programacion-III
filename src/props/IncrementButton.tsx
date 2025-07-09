import type { MouseEventHandler } from "react";

export default function IncrementButton(props: { onIncrement: MouseEventHandler<HTMLButtonElement> | undefined; }) {
  return <button onClick={props.onIncrement}>Sumar 1</button>;
}