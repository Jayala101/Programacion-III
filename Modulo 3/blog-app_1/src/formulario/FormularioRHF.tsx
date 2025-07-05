import { useForm } from 'react-hook-form';

export default function FormularioRHF() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    alert(JSON.stringify(data));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        placeholder="Nombre"
        {...register("nombre")}
      /><br />

      <input
        type="email"
        placeholder="Correo electrónico"
        {...register("email")}
      /><br />

      <button type="submit">Enviar</button>
    </form>
  );
}