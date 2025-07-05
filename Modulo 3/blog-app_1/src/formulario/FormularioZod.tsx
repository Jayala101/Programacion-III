import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const schema = z.object({
  nombre: z.string().min(3, "Mínimo 3 caracteres"),
  email: z.string().email("Correo inválido"),
});

export default function FormularioZod() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(schema)
  });


  const onSubmit = (data: any) => {
    alert("Datos válidos: " + JSON.stringify(data));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input placeholder="Nombre" {...register("nombre")} />
      <p>{errors.nombre?.message}</p>

      <input placeholder="Correo" {...register("email")} />
      <p>{errors.email?.message}</p>

      <button type="submit">Enviar</button>
    </form>
  );
}