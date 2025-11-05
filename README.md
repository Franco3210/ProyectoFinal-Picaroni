E-commerce hecho con React

Descripción:
    Página web interactiva para un carrito de compras donde el usuario puede ver un catálogo de productos con su información detallada y debida categoría.  
    El usuario podrá agregar productos al carrito, quitarlos del mismo, realizar un pedido y obtener su ID de compra.

---

Tecnologías utilizadas:
    -React + Vite
    -Firebase
    -JavaScript
    -CSS

---

Funcionalidades principales:
    -Listado de productos.
    -Carrito de compras.
    -División por categorías.
    -Generación de ID de compra.

---

Estructura del proyecto:

    src/
    ├── assets/
    │ └── react.svg
    ├── components/
    │ ├── Cart.jsx
    │ ├── CartWidget.jsx
    │ ├── Checkout.jsx
    │ ├── Counter.jsx
    │ ├── Item.jsx
    │ ├── ItemList.jsx
    │ ├── ItemListContainer.jsx
    │ ├── ItemListContainer.css
    │ ├── NavBar.jsx
    │ └── NavBar.css
    ├── context/
    │ ├── CartContext.jsx
    │ └── CartProvider.jsx
    ├── firebase/
    │ ├── config.js
│ └── db.js
    ├── App.jsx
    ├── App.css
    ├── index.css
    └── main.jsx