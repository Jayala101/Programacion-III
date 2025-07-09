import { useState } from "react";
import UserList from "./UserList";

export default function ParentUserList() {
  const [users, setUsers] = useState(["Ana", "Luis", "Carlos"]);
  const removeUser = (index: number) => setUsers(users.filter((_, i) => i !== index));

  return <UserList users={users} onRemove={removeUser} />;
}