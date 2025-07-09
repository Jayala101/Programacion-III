import { useState, useDeferredValue } from 'react';

export default function ValidacionEmail() {
  const [email, setEmail] = useState('');
  const emailDiferido = useDeferredValue(email);

  const esValido = emailDiferido.includes("@") && emailDiferido.includes(".");

  return (
    <>
      <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Tu correo electrónico" />
      <p style={{ color: esValido ? 'lightgreen' : 'salmon' }}>
        {emailDiferido === "" ? "Esperando..." : esValido ? "Email válido" : "Email inválido"}
      </p>
    </>
  );
}