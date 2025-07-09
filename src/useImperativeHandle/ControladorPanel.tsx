import { useRef, useImperativeHandle, forwardRef } from 'react';

type PanelHandle = {
  mostrarAlerta: () => void;
};

const PanelConAlerta = forwardRef<PanelHandle>((_, ref) => {
  useImperativeHandle(ref, () => ({
    mostrarAlerta: () => {
      alert("Esta es una alerta desde el hijo");
    }
  }));

  return <p>Soy el panel</p>;
});

export const ControladorPanel: React.FC = () => {
  const panelRef = useRef<PanelHandle>(null);

  return (
    <>
      <PanelConAlerta ref={panelRef} />
      <button onClick={() => panelRef.current?.mostrarAlerta()}>Mostrar alerta</button>
    </>
  );
};