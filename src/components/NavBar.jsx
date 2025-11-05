
import React, { useState } from 'react';
import './NavBar.css';
import { NavLink } from "react-router-dom";
import { CartWidget } from "./CartWidget";

export const NavBar = () => {
  const [open, setOpen] = useState(false);


  const toggleDropdown = () => {
    setOpen(!open);
  };

  return (
    <nav className="navbar">
      <h1 className="navbar-logo">Kiosco de Franco</h1>

      <ul className="navbar-list">
        <li className="navbar-item">
          <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
            Inicio
          </NavLink>
        </li>

        {/* Dropdown Categorías */}
        <li className="navbar-item dropdown">
          <button className="dropbtn" onClick={toggleDropdown}>
            Categorías ▾
          </button>
          {open && (
            <ul className="dropdown-content">
              <li><NavLink to="/categoria/ropa">Ropa</NavLink></li>
              <li><NavLink to="/categoria/celulares">Celulares</NavLink></li>
              <li><NavLink to="/categoria/hogar">Hogar</NavLink></li>
              <li><NavLink to="/categoria/mascotas">Mascotas</NavLink></li>
              <li><NavLink to="/categoria/consolas">Consolas</NavLink></li>
            </ul>
          )}
        </li>

        <li className="navbar-item">
          <NavLink to="/otro" className={({ isActive }) => (isActive ? "active" : "")}>
            Otro
          </NavLink>
        </li>

        <li className="navbar-item cart-widget">
          <CartWidget />
        </li>
      </ul>
    </nav>
  );
};
