import { useState } from 'react';

export default function LoginForm(props: any) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    props.onLogin({ email, password });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" onChange={e => setEmail(e.target.value)} /><br/>
      <input type="password" onChange={e => setPassword(e.target.value)} /><br/>
      <button type="submit">Iniciar sesión</button>
    </form>
  );
}