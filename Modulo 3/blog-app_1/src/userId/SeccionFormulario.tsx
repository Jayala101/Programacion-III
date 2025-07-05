import { useId } from 'react';

export default function SeccionFormulario() {
  const sectionId = useId();
  const inputId = sectionId + "-email";

  return (
    <section aria-labelledby={sectionId}>
      <h2 id={sectionId}>Contacto</h2>
      <label htmlFor={inputId}>Correo electrónico:</label>
      <input id={inputId} type="email" />
    </section>
  );
}