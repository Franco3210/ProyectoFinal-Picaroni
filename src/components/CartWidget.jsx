import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import { CartContext } from "../context/CartContext"; // 👈 importás tu contexto

export const CartWidget = () => {
  const { cartCount } = useContext(CartContext); // 👈 usamos el valor del contexto

  return (
    <NavLink to="/cart">
      <button className="btnCartWidget">
        <img
          src="https://images.icon-icons.com/1138/PNG/512/1486395300-03-trolley_80567.png"
          height={70}
          width={70}
          alt="Carrito"
        />
        <span className="badge">{cartCount}</span>
      </button>
    </NavLink>
  );
};