import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Checkout() {
  const { cart, getTotal, clearCart } = useContext(CartContext);

  if (cart.length === 0)
    return (
      <div style={{ padding: "2rem" }}>
        <h2>Tu carrito está vacío</h2>
        <p>Agrega productos antes de continuar al checkout.</p>
      </div>
    );

  const handleCheckout = () => {
    alert("Gracias por tu compra!");
    clearCart(); // opcional: vaciar carrito después del checkout
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h2>💳 Checkout</h2>
      <ul>
        {cart.map((p) => (
          <li key={p.id}>
            {p.title} x {p.quantity} = ${p.price * p.quantity}
          </li>
        ))}
      </ul>
      <h3>Total: ${getTotal()}</h3>
      <button
        onClick={handleCheckout}
        style={{
          padding: "0.7rem 1.5rem",
          background: "#28a745",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Confirmar Compra
      </button>
    </div>
  );
}


export default Checkout;