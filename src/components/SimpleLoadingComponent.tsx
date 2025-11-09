import { useEffect, useState } from "react";
import type { UserType } from "../types/UserType";

const SimpleLoadingComponent = () => {
  const [users, setUsers] = useState<UserType[]>([]);

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data.users));
  }, []);

  return(

      <div>
    <h1>User List</h1>
    <ul>
      {users.map((user) => (
          <li key={user.id}>
          {user.userName} - {user.password}
        </li>
      ))}
    </ul>
  </div>
    )
};

export default SimpleLoadingComponent;
