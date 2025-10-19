
import React, { useContext } from "react";
import { CartContext } from "../Context/CartContext.jsx";
import { useNavigate } from "react-router-dom";

function Cart() {
  const { 
    cart, 
    deleteItem, 
    clearCart, 
    incrementItem, 
    decrementItem, 
    getTotal 
  } = useContext(CartContext);

  const navigate = useNavigate();

  const handleGoCheckout = () => {
    navigate("/checkout");
  };

  if (cart.length === 0) {
    return (
      <div style={{ padding: "2rem", textAlign: "center" }}>
        <h2>🛒 Tu carrito está vacío</h2>
        <p>Agrega productos para verlos aquí.</p>
      </div>
    );
  }

  return (
    <div style={{ padding: "2rem" }}>
      <h2>🛍️ Tu Carrito</h2>
      
      {cart.map((p) => (
        <div 
          key={p.id} 
          style={{ 
            borderBottom: "1px solid #ddd", 
            padding: "1rem 0", 
            display: "flex", 
            justifyContent: "space-between", 
            alignItems: "center"
          }}
        >
          <div>
            <h3>{p.title || p.name}</h3> {/* Nombre del producto */}
            <p>Precio unitario: ${p.price}</p>

            <div>
              <button onClick={() => decrementItem(p.id)}>-</button>
              <span style={{ margin: "0 10px" }}>{p.quantity}</span>
              <button onClick={() => incrementItem(p.id)}>+</button>
            </div>

            <p>Subtotal: ${p.price * p.quantity}</p>
          </div>

          <button 
            onClick={() => deleteItem(p.id)}
            style={{
              background: "#ff4d4d",
              color: "white",
              border: "none",
              padding: "0.5rem 1rem",
              borderRadius: "5px",
              cursor: "pointer"
            }}
          >
            ❌ Eliminar
          </button>
        </div>
      ))}

      <h3 style={{ marginTop: "2rem" }}>Total: ${getTotal()}</h3>

      <div style={{ marginTop: "1rem" }}>
        <button
          onClick={clearCart}
          style={{
            background: "#555",
            color: "white",
            padding: "0.7rem 1.5rem",
            borderRadius: "5px",
            marginRight: "1rem",
            cursor: "pointer"
          }}
        >
          🧹 Vaciar carrito
        </button>

        <button
          onClick={handleGoCheckout}
          style={{
            background: "#007bff",
            color: "white",
            padding: "0.7rem 1.5rem",
            borderRadius: "5px",
            cursor: "pointer"
          }}
        >
          💳 Checkout
        </button>
      </div>
    </div>
  );
}

export default Cart;