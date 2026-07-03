import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-links">
        <NavLink
          to="/login"
          className={({ isActive }) =>
            isActive ? "nav-link active-link" : "nav-link"
          }
        >
          Login
        </NavLink>

        <NavLink
          to="/register"
          className={({ isActive }) =>
            isActive ? "nav-link active-link" : "nav-link"
          }
        >
          Register
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;