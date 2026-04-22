
import { useEffect, useState } from "react";
import { FaHome, FaMoon, FaShoppingCart, FaSun } from "react-icons/fa";
import { Link } from "react-router-dom";
function Navbar({ cartCount, setSearch }) {
  const [theme, setTheme] = useState("light");

// Load saved theme
useEffect(() => {
  const savedTheme = localStorage.getItem("theme") || "light";
  setTheme(savedTheme);
}, []);

// Apply + save theme
useEffect(() => {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
}, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === "light" ? "dark" : "light"));
  };

  return (
    <header className="navbar">
      <div className="nav-left">
        <img src="/images/logo.png" alt="logo" className="logo-img" />
        <h1 className="logo-text">STYLE</h1>
      </div>
      
        <input 
          type="text"  
          placeholder="Search products..."
          onChange={(e) => setSearch(e.target.value)}
          className="search-input"
        />

        <nav className="nav-links">
          <div className="theme-icon icon" onClick={toggleTheme}>
            {theme === "light" ? <FaMoon /> : <FaSun />}
          </div>

          <Link to="/">
            <span className="link-text">Home </span>
            <span className="icon-wrapper"><FaHome className="icon"/></span>
          </Link>
          <Link to="/cart" className="cart-link">
            <span className="link-text">Cart </span>
            <span className="icon-wrapper"><FaShoppingCart className="icon" /> 
              {cartCount > 0 && (<span className="cart-count">{cartCount}</span>)}
            </span>
          </Link>
        </nav>
          
    </header>
  );
}

export default Navbar;