
import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import { CartContext } from "../Context/CartContext.jsx";
import { getItems } from "../firebase/db"; 

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { idCategoria } = useParams(); 
  const context = useContext(CartContext);

  useEffect(() => {
    async function fetchProducts() {
      setLoading(true);
      try {
        const items = await getItems();
        const filtered = idCategoria
          ? items.filter(item => item.category === idCategoria)
          : items;

        setProducts(filtered);
      } catch (error) {
        console.error("Error cargando productos:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, [idCategoria, context]); 
  if (loading) return <p>Cargando productos...</p>;

  return <ItemList products={products} />;
};


export default ItemListContainer;