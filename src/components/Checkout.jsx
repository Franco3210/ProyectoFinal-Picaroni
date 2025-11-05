import { useState, useContext } from "react";
import { CartContext } from "../context/CartContext.jsx";
import "./Checkout.css";

function Checkout() {
  const { cart, getTotal, clearCart } = useContext(CartContext);
  const [showForm, setShowForm] = useState(false);
  const [buyer, setBuyer] = useState({ nombre: "", email: "", telefono: "" });
  const [orderId, setOrderId] = useState(null);
  const [loading, setLoading] = useState(false);

  // Si ya se generó la orden
  if (orderId) {
    return (
      <div className="checkout-container">
        <h2>¡Gracias por tu compra, {buyer.nombre}!</h2>
        <p>Tu ID de orden es:</p>
        <strong className="order-id">{orderId}</strong>
      </div>
    );
  }

 
  if (cart.length === 0) {
    return (
      <div className="checkout-container">
        <h2>Tu carrito está vacío</h2>
        <p>Agrega productos antes de continuar al checkout.</p>
      </div>
    );
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

   
    const fakeId = Math.random().toString(36).substring(2, 10).toUpperCase();


    setTimeout(() => {
      setOrderId(fakeId);
      clearCart();
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="checkout-container">
      <h2>🛒 Checkout</h2>

      {!showForm ? (
        <>
          <ul className="checkout-list">
            {cart.map((p) => (
              <li key={p.id}>
                {p.title} x {p.quantity} = ${p.price * p.quantity}
              </li>
            ))}
          </ul>
          <h3>Total: ${getTotal()}</h3>
          <button className="checkout-button" onClick={() => setShowForm(true)}>
            Ir al formulario de compra
          </button>
        </>
      ) : (
        <form onSubmit={handleSubmit} className="checkout-form">
          <h3>Completa tus datos</h3>
          <input
            type="text"
            placeholder="Nombre completo"
            value={buyer.nombre}
            onChange={(e) => setBuyer({ ...buyer, nombre: e.target.value })}
            required
          />
          <input
            type="email"
            placeholder="Correo electrónico"
            value={buyer.email}
            onChange={(e) => setBuyer({ ...buyer, email: e.target.value })}
            required
          />
          <input
            type="tel"
            placeholder="Teléfono"
            value={buyer.telefono}
            onChange={(e) => setBuyer({ ...buyer, telefono: e.target.value })}
            required
          />
          <button type="submit" className="checkout-button" disabled={loading}>
            {loading ? "Procesando compra..." : "Finalizar compra"}
          </button>
        </form>
      )}
    </div>
  );
}

export default Checkout;