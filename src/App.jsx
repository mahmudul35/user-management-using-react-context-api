import { useState } from "react";
import "./App.css";
import Users from "./components/Users/Users";
import UsersContext from "./components/context/UserContext";

const USERS = [
  { id: 1, name: "Alice Johnson", age: 25, email: "alice.johnson@example.com" },
  { id: 2, name: "Bob Smith", age: 30, email: "bob.smith@example.com" },
  { id: 3, name: "Charlie Brown", age: 28, email: "charlie.brown@example.com" },
  { id: 4, name: "Diana Lee", age: 24, email: "diana.lee@example.com" },
  { id: 5, name: "Ethan Clark", age: 32, email: "ethan.clark@example.com" },
  { id: 6, name: "Fiona Green", age: 27, email: "fiona.green@example.com" },
  { id: 7, name: "George Hill", age: 29, email: "george.hill@example.com" },
  { id: 8, name: "Hannah Baker", age: 26, email: "hannah.baker@example.com" },
  { id: 9, name: "Ian Scott", age: 33, email: "ian.scott@example.com" },
  { id: 10, name: "Jane Adams", age: 31, email: "jane.adams@example.com" },
  { id: 11, name: "Kevin Price", age: 27, email: "kevin.price@example.com" },
  { id: 12, name: "Laura White", age: 24, email: "laura.white@example.com" },
  { id: 13, name: "Mike Lewis", age: 29, email: "mike.lewis@example.com" },
  { id: 14, name: "Nina Evans", age: 26, email: "nina.evans@example.com" },
  { id: 15, name: "Oscar Perez", age: 28, email: "oscar.perez@example.com" },
  {
    id: 16,
    name: "Paula Roberts",
    age: 25,
    email: "paula.roberts@example.com",
  },
  { id: 17, name: "Quincy Brown", age: 30, email: "quincy.brown@example.com" },
  {
    id: 18,
    name: "Rachel Harris",
    age: 32,
    email: "rachel.harris@example.com",
  },
  { id: 19, name: "Steve Walker", age: 33, email: "steve.walker@example.com" },
  {
    id: 20,
    name: "Tina Mitchell",
    age: 28,
    email: "tina.mitchell@example.com",
  },
];

function App() {
  const [users, setUsers] = useState(USERS);

  const handleDelete = (id) => {
    const filteredUsers = users.filter((user) => user.id !== id);
    setUsers(filteredUsers);
  };

  return (
    <UsersContext.Provider value={{ users, setUsers }}>
      <div>
        <Users handleDelete={handleDelete} />
      </div>
    </UsersContext.Provider>
  );
}

export default App;
