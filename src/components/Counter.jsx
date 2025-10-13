
import { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";

function Counter({ item }) {
  const [count, setCount] = useState(0);

  // 👇 esto es lo que faltaba
  const { addToCart } = useContext(CartContext);

  const handleAdd = () => setCount(count + 1);

  const handleSub = () => {
    if (count > 0) setCount(count - 1);
  };

  const handleAddToCart = () => {
    if (count > 0) {              // solo agregamos si hay algo
      addToCart(item, count);
      setCount(0);                // opcional: resetear a 0
    }
  };

  return (
    <div>
      <p>Cantidad: {count}</p>
      <button onClick={handleSub} className="btn btn-danger">-</button>
      <button onClick={handleAdd} className="btn btn-success">+</button>
      <button onClick={handleAddToCart} className="btn btn-primary">
        Agregar al carrito
      </button>
    </div>
  );
}

export default Counter;