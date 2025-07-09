import { useLayoutEffect, useRef } from 'react';

export const MedicionCajaTS = () => {
  const ref = useRef<HTMLDivElement | null>(null); // ✅ se pasa null como initialValue

  useLayoutEffect(() => {
    if (ref.current) {
      const { offsetWidth, offsetHeight } = ref.current;
      console.log("Medidas:", offsetWidth, "x", offsetHeight);
    }
  }, []);

  return (
    <div
      ref={ref}
      style={{ width: '300px', height: '150px', backgroundColor: 'slateblue' }}
    >
      Caja medible
    </div>
  );
};
