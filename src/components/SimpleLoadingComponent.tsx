import { useEffect, useState } from "react";
import type { UserType } from "../types/UserType";

const SimpleLoadingComponent = () => {
  const [users, setUsers] = useState<UserType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [errors, setErrors] = useState<string>("");

  // (Fetching Data Using Promises)

  //   useEffect(() => {
  //     setLoading(true);
  //     fetch("https://dummyjson.com/users")
  //       .then((res) => res.json())
  //       .then((data) => setUsers(data.users))
  //       .catch((error) => {
  //         console.log("There are some Erros",error);
  //         setErrors(error)
  //       })
  //       .finally(() => {
  //         setLoading(false);
  //       });
  //   }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch("https://dummyjson.com/users");
      if (!response.ok) {
        throw new Error("Network response Was Not okay");
      }
      const data = await response.json();
      setUsers(data.users);
    } catch (error) {
      console.log("There are some Erros", error);
      setErrors("Error Fetching User");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {loading && <p>loading...</p>}
      <h1 className="font-bold text-2xl">User List</h1>
      {errors && <p className="text-red-800 text-2xl">{errors}</p>}
      <ul>
        {users.map((user) => (
          <li className="flex" key={user.id}>
            <span className="font-bold ">User Name: </span> {user.username}
            <span className="font-bold">Password: </span> {user.password}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SimpleLoadingComponent;
