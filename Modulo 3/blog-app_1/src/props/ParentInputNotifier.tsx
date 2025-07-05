import { useState } from "react";
import InputNotifier from "./InputNotifier";

export default function ParentInputNotifier() {
  const [text, setText] = useState("");

  return (
    <>
      <InputNotifier onChangeText={setText} />
      <p>Texto: {text}</p>
    </>
  );
}