import { useState, useEffect } from "react";
import UserCard from "./components/UserCard";
import "./App.css";

export default function UserData() {
  
  // State Management
  const[user , setUser] = useState([]);
  const[loading , setLoading] = useState(true);
  const[error , setError] = useState("");
  const[search , setSearch] = useState("");
 
  // Fetching Data from API
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())

      .then((data) => {
        setUser(data);
        setLoading(false);
      })

      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);
  
  //Filtering Data based on search input
  const filteredUsers = user.filter(
    (user) =>
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase()) ||
      user.address.city.toLowerCase().includes(search.toLowerCase())
  );

  //Rendering the component 
  return (
    //Main Container
    <div className="container">

      <h1>User Directory</h1>
    
      <div className="search-box">
        <input
          type="text"
          className="input"
          placeholder="Search by name, email or city..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
      </div>
  
      <div className="display">
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
      </div>
      
      <div className="user-grid">
        {filteredUsers.map((user) => (
          <UserCard
            key={user.id}
            name={user.name}
            email={user.email}
            city={user.address.city}
            company={user.company.name}
            phone={user.phone}
          />
        ))}
      </div>

      <div className = "user-grid">
        {filteredUsers.length === 0 && !loading && <p> No Users found</p>}
      </div>

    </div>
  );
}
