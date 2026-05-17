import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    isActive ? "nav-link active-link" : "nav-link";

  return (
    <nav className="navbar navbar-expand-lg navbar-dark animated-navbar">
      <div className="container">
        {/* Brand */}
        <NavLink className="navbar-brand brand" to="/">
          🌾 AgriPakistan
        </NavLink>

        {/* Mobile toggle */}
        <button className="navbar-toggler" onClick={() => setOpen(!open)}>
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu */}
        <div
          className={`collapse navbar-collapse ${open ? "show slide-down" : ""}`}
        >
          <ul className="navbar-nav ms-auto text-center">
            {[
              ["Home", "/"],
              ["About", "/about"],
              ["Crops", "/crops"],
              ["Weather", "/weather"],
              ["Market", "/market"],
              ["Contact", "/contact"],
            ].map(([name, path]) => (
              <li className="nav-item" key={path}>
                <NavLink to={path} className={linkClass}>
                  {name}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <div className="ms-lg-3 text-center mt-3 mt-lg-0">
            <button className="login-btn">Farmer Login</button>
          </div>
        </div>
      </div>
    </nav>
  );
}
