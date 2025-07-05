export default function UserList(props: any) {
  return (
    <ul>
      {props.users.map((user: any, i: any) => (
        <li key={i}>
          {user} <button onClick={() => props.onRemove(i)}>Eliminar</button>
        </li>
      ))}
    </ul>
  );
}