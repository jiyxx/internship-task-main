import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/axios";

const Users = () => {
  const navigate = useNavigate();

  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");
  const [editingUserId, setEditingUserId] = useState(null);
  const [editForm, setEditForm] = useState({ name: "", email: "" });

  const fetchUsers = async () => {
    try {
      const res = await api.get("/api/users");
      setUsers(res.data);
    } catch (err) {
      setError(err.response?.data?.message || "Failed to fetch users");
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleDelete = async (id) => {
    try {
      await api.delete(`/api/users/${id}`);
      fetchUsers();
    } catch (err) {
      setError(err.response?.data?.message || "Delete failed");
    }
  };

  const handleEditClick = (user) => {
    setEditingUserId(user._id);
    setEditForm({
      name: user.name,
      email: user.email,
    });
  };

  const handleEditChange = (e) => {
    setEditForm({
      ...editForm,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpdate = async (id) => {
    try {
      await api.put(`/api/users/${id}`, editForm);
      setEditingUserId(null);
      fetchUsers();
    } catch (err) {
      setError(err.response?.data?.message || "Update failed");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="users-page">
      <div className="users-topbar">
        <h2 className="users-heading">Users</h2>
        <button className="logout-page-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>

      {error && <p className="page-error">{error}</p>}

      <div className="users-grid">
        {users.map((user) => (
          <div className="user-card" key={user._id}>
            {editingUserId === user._id ? (
              <div className="edit-form">
                <input
                  type="text"
                  name="name"
                  value={editForm.name}
                  onChange={handleEditChange}
                />
                <input
                  type="email"
                  name="email"
                  value={editForm.email}
                  onChange={handleEditChange}
                />
                <div className="user-actions">
                  <button
                    className="save-btn"
                    onClick={() => handleUpdate(user._id)}
                  >
                    Save
                  </button>
                  <button
                    className="cancel-btn"
                    onClick={() => setEditingUserId(null)}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              <>
                <p><strong>Name:</strong> {user.name}</p>
                <p><strong>Email:</strong> {user.email}</p>

                <div className="user-actions">
                  <button
                    className="edit-btn"
                    onClick={() => handleEditClick(user)}
                  >
                    Edit
                  </button>
                  <button
                    className="delete-btn"
                    onClick={() => handleDelete(user._id)}
                  >
                    Delete
                  </button>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;