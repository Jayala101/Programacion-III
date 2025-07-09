import { useRef, useImperativeHandle, forwardRef } from 'react';

type InputEnfocableHandle = {
  enfocar: () => void;
};

const InputEnfocable = forwardRef<InputEnfocableHandle>((_, ref) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useImperativeHandle(ref, () => ({
    enfocar: () => {
      inputRef.current?.focus();
    }
  }));

  return <input ref={inputRef} type="text" placeholder="Escribe algo..." />;
});

export const PadreConInput: React.FC = () => {
  const refInput = useRef<InputEnfocableHandle>(null);

  return (
    <>
      <InputEnfocable ref={refInput} />
      <button onClick={() => refInput.current?.enfocar()}>Enfocar input</button>
    </>
  );
};
