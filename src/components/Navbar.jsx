import { NavLink, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/search?q=${search}`);
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
            <NavLink to="/add">Adicionar</NavLink>
          </li>
          <li>
            <NavLink to="/about">Sobre</NavLink>
          </li>
        </ul>
      </div>
      <form className="navbar-search" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Buscar produtos..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit">Buscar</button>
      </form>
      <button className="navbar-toggle" onClick={toggleMenu}>
        ☰
      </button>
    </nav>
  );
}

export default Navbar;
