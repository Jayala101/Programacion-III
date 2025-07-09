
import { useReducer } from 'react';
import type { ChangeEvent } from 'react';

interface State {
  nombre: string;
  email: string;
}

interface Action {
  name: string;
  value: string;
}

const initialState: State = { nombre: '', email: '' };

function reducer(state: State, action: Action): State {
  return { ...state, [action.name]: action.value };
}

export default function FormularioReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    dispatch({ name: e.target.name, value: e.target.value });
  }

  return (
    <form>
      <input
        name="nombre"
        value={state.nombre}
        onChange={handleChange}
        placeholder="Nombre"
      />
      <input
        name="email"
        value={state.email}
        onChange={handleChange}
        placeholder="Email"
      />
      <pre>{JSON.stringify(state, null, 2)}</pre>
    </form>
  );
}
