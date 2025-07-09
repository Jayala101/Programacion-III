export default function ShowDate() {
  const today = new Date().toLocaleDateString();
  return <p>Fecha actual: {today}</p>;
}