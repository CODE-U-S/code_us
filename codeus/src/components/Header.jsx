import { NavLink } from "react-router-dom";
import "./css/Header.css";

function Header() {
  return (
    <header className="header">
      <NavLink to="/">
        <img src="/logo.png" alt="Code-Us" className="logo" style={{ width: "120px" }} />
      </NavLink>

      <nav className="nav">
        <NavLink to="/main" className={({ isActive }) => `nav-link${isActive ? " active" : ""}`}>Introduce</NavLink>
        <NavLink to="/project" className={({ isActive }) => `nav-link${isActive ? " active" : ""}`}>Project</NavLink>
        <NavLink to="/support" className={({ isActive }) => `nav-link${isActive ? " active" : ""}`}>Support</NavLink>
        <a href="https://github.com/CODE-U-S" target="_blank" rel="noopener noreferrer" className="blog">
          Github <span className="arrow">↗</span>
        </a>
      </nav>
    </header>
  );
}

export default Header;
