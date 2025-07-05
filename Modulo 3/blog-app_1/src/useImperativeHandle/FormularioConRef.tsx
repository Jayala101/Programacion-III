import { useRef, useImperativeHandle, forwardRef, useState } from 'react';

type InputHandle = {
  limpiar: () => void;
  enfocar: () => void;
};

const InputControlado = forwardRef<InputHandle>((_, ref) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [value, setValue] = useState<string>("");

  useImperativeHandle(ref, () => ({
    limpiar: () => setValue(""),
    enfocar: () => inputRef.current?.focus()
  }));

  return (
    <input
      ref={inputRef}
      value={value}
      onChange={e => setValue(e.target.value)}
    />
  );
});

export const FormularioConRef: React.FC = () => {
  const inputRef = useRef<InputHandle>(null);

  return (
    <>
      <InputControlado ref={inputRef} />
      <button onClick={() => inputRef.current?.enfocar()}>Enfocar</button>
      <button onClick={() => inputRef.current?.limpiar()}>Limpiar</button>
    </>
  );
};