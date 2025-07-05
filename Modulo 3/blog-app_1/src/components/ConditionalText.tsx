export default function ConditionalText() {
  const isLoggedIn = true;

  return (
    <p>
      {isLoggedIn ? 'Bienvenido de nuevo' : 'Por favor inicia sesión'}
    </p>
  );
}