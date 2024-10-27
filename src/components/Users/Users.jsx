import React from "react";
import User from "../User/User";

const Users = ({ users, handleDelete }) => {
  console.log(users);
  return (
    <div className="grid grid-cols-3 gap-4   ">
      {users.map((users) => (
        <User users={users} handleDelete={handleDelete} />
      ))}
    </div>
  );
};

export default Users;
