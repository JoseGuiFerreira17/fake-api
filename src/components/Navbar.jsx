import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="/">Minha Loja</a>
      </div>
      <div className={`navbar-links ${isOpen ? "open" : ""}`}>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">Sobre</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contato</NavLink>
          </li>
        </ul>
      </div>
      <form className="navbar-search">
        <input type="text" placeholder="Buscar produtos..." />
        <button type="submit">Buscar</button>
      </form>
      <button className="navbar-toggle" onClick={toggleMenu}>
        ☰
      </button>
    </nav>
  );
}

export default Navbar;
