import { useUsers } from "./Context";



const Child2 = () => {
    const {users} = useUsers();
  return (
    <ul>
        {users.map((user) => (
            <li key={user.id}>{user.name}</li>
        ))}
    </ul>
  )
}

export default Child2