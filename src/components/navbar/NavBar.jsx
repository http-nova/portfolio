import { useState } from "react";
import "./NavBar.css";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="nav-main">
      <div className="menu-toggle" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className={`nav-links ${menuOpen ? "open" : ""}`}>
        <ul>
          <li>
            <a href="#about" onClick={closeMenu}>About</a>
          </li>
          <li>
            <a href="#projects" onClick={closeMenu}>Projects</a>
          </li>
          <li>
            <a href="#footer" onClick={closeMenu}>Contact</a>
          </li>
          <li className="nav-box">
            <a href="#home" onClick={closeMenu}>Home</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
