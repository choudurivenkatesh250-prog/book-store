import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./components/Home";
import BookList from "./components/BookList";
import BookDetails from "./components/BookDetails";
import Cart from "./components/Cart";
import { useState } from "react";
import CartContext from "./context/CartContext";

function App() {
  const [cartList, setCartList] = useState([]);

  // ✅ Add item (with quantity logic)
  const addCartItem = (product) => {
    setCartList((prev) => {
      const existing = prev.find(item => item.Id === product.Id);

      if (existing) {
        return prev.map(item =>
          item.Id === product.Id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...prev, { ...product, quantity: 1 }];
    });
  };

  // ✅ Delete
  const deleteCartItem = (id) => {
    setCartList(prev => prev.filter(item => item.Id !== id));
  };

  // ✅ Increase
  const increaseItem = (id) => {
    setCartList(prev =>
      prev.map(item =>
        item.Id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  // ✅ Decrease
  const decreaseItem = (id) => {
    setCartList(prev =>
      prev.map(item =>
        item.Id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  return (
    <BrowserRouter>
      <CartContext.Provider
        value={{
          cartList,
          addCartItem,
          deleteCartItem,
          increaseItem,
          decreaseItem,
        }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<BookList />} />
          <Route path="/books/:id" element={<BookDetails />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </CartContext.Provider>
    </BrowserRouter>
  );
}

export default App;