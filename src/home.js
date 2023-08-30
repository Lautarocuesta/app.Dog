import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";

function Home() {
  const [users, setUsers] = useState([]);

  const getUser = () => {
    axios
      .get(
        "https://my-json-server.typicode.com/fedevirgolini-itr/api_practico5/users"
      )
      .then((response) => setUsers(response.data))
      .catch((error) => console.error(`Error: ${error}`));
  };

  useEffect(() => getUser());

  return (
    <div className="App">
      <header className="App-header">
        <p>wellcum to home</p>
        <ul>
          {users.map((user) => {
            return(
            <li id={user.id}>
              {user.name} {user.surname}
            </li>
          )})}
        </ul>
      </header>
    </div>
  );
}

export default Home;
