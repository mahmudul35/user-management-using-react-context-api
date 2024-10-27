import React, { useContext } from "react";
import UsersContext from "../context/UserContext";
import User from "../User/User";
const Users = ({ handleDelete }) => {
  const { users, setUsers } = useContext(UsersContext);
  console.log(users);
  return (
    <div className="grid grid-cols-3 gap-4   ">
      {users.map((users) => (
        <User handleDelete={handleDelete} users={users} />
      ))}
    </div>
  );
};

export default Users;
