import { useState, useEffect } from "react";
import UserCard from "../components/UserCard";
import "../App.css";

export default function Users() {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");

  // Fetching Data from API
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch users data");
        }
        return response.json();
      })

      .then((data) => {
        setUser(data);
        setLoading(false);
      })

      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  const filteredUsers = user.filter(
    (user) =>
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase()) ||
      user.address.city.toLowerCase().includes(search.toLowerCase()),
  );

  //Rendering the component
  return (
    //Main Container
    <div className="container">
      <header className="header">
        <h1>User Directory</h1>
      </header>

      <div className="display">
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
      </div>

      <div className="user-grid">
        {filteredUsers.map((user) => (
          <UserCard
            key={user.id}
            id={user.id}
            name={user.name}
            email={user.email}
            city={user.address.city}
          />
        ))}

        {filteredUsers.length === 0 && !loading && <p> No Users found </p>}
      </div>
    </div>
  );
}
