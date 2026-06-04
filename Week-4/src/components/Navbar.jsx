import {useContext} from "react";
import { NavLink } from "react-router-dom";
import {ThemeContext} from "../context/ThemeContext";

export default function Navbar() {
  const { theme, toggleTheme } =  useContext(ThemeContext);

  return (
    <div className="navbar">

      <NavLink to="/"> Home </NavLink> 
      <NavLink to="/Users"> Users</NavLink>
      <NavLink to="/Contacts" > Contacts </NavLink>
      
      <button className="theme-btn" onClick={toggleTheme}>
        {theme === "light" ? "🌙 Dark " : "☀️ Light"}
      </button>
    </div>
  );
}
