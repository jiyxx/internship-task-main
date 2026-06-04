import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import {useNavigate} from "react-router-dom";
import "../App.css";

export default function UserDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch user");
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
  }, [id]);

  if (loading) return <h3 className="loading ">Loading...</h3>;
  if (error) return <h3 className="error">{error}</h3>;

  //Name , username , email , adress(city) , phone , website , company(name)
  return (
    <div className="detail-container">

      <div className="back-button">
        <button onClick={() => navigate(-1)}> ← Back </button>
      </div>

      <div className="user-detail">
        <h1>{user.name}</h1>
        <p>
          <strong> Username:</strong> {user.username}
        </p>

        <p>
          <strong>Email:</strong> {user.email}
        </p>

        <p>
          <strong>Address: </strong>
          {user.address.city}
        </p>

        <p>
          <strong>Phone:</strong> {user.phone}
        </p>

        <p>
          <strong>Website:</strong> {user.website}
        </p>

        <p>
          <strong>Company:</strong> {user.company.name}
        </p>
      </div>
    </div>
  );
}
