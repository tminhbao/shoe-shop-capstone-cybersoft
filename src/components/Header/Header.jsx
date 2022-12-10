import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div className="bg-dark text-white">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "nav-link active" : "nav-link"
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/login"
        className={({ isActive }) =>
          isActive ? "nav-link active" : "nav-link"
        }
      >
        Login
      </NavLink>
    </div>
  );
}
