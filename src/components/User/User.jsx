import React from "react";

const User = ({ users, handleDelete }) => {
  return (
    <div className="flex justify-between items-center bg-yellow-200 p-4 rounded-lg m-3">
      <div>
        <p>ID: {users.id}</p>
        <p>Name: {users.name}</p>
        <p>Age: {users.age}</p>
        <p>Email: {users.email}</p>
      </div>
      <div>
        <button
          onClick={() => handleDelete(users.id)}
          className="bg-red-500 text-white p-3 rounded-md"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default User;
