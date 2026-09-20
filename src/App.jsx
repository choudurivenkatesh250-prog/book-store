import { BrowserRouter, Routes, Route } from "react-router";
import { useEffect, useState } from "react";
import Home from "./components/Home";
import BookList from "./components/BookList";
import BookDetails from "./components/BookDetails";
import Cart from "./components/Cart";
import LoginPage from "./components/LoginPage";
import CartContext from "./context/CartContext";
import "./index.css";
const readStorage = (key) => { try { return JSON.parse(localStorage.getItem(key)) || []; } catch { return []; } };
function App() {
  const [cartList, setCartList] = useState(() => readStorage("bookle-cart"));
  const [wishlist, setWishlist] = useState(() => readStorage("bookle-wishlist"));
  useEffect(() => localStorage.setItem("bookle-cart", JSON.stringify(cartList)), [cartList]);
  useEffect(() => localStorage.setItem("bookle-wishlist", JSON.stringify(wishlist)), [wishlist]);
  const addCartItem = (product) => setCartList((items) => { const found = items.find((item) => item.Id === product.Id); return found ? items.map((item) => item.Id === product.Id ? { ...item, quantity: item.quantity + 1 } : item) : [...items, { ...product, quantity: 1 }]; });
  const deleteCartItem = (id) => setCartList((items) => items.filter((item) => item.Id !== id));
  const increaseItem = (id) => setCartList((items) => items.map((item) => item.Id === id ? { ...item, quantity: item.quantity + 1 } : item));
  const decreaseItem = (id) => setCartList((items) => items.map((item) => item.Id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item));
  const clearCart = () => setCartList([]);
  const toggleWishlist = (book) => setWishlist((items) => items.some((item) => item.Id === book.Id) ? items.filter((item) => item.Id !== book.Id) : [...items, book]);
  return <BrowserRouter><CartContext.Provider value={{ cartList, wishlist, addCartItem, deleteCartItem, increaseItem, decreaseItem, clearCart, toggleWishlist }}><Routes><Route path="/" element={<Home />} /><Route path="/books" element={<BookList />} /><Route path="/books/:id" element={<BookDetails />} /><Route path="/cart" element={<Cart />} /><Route path="/login" element={<LoginPage />} /></Routes></CartContext.Provider></BrowserRouter>;
}
export default App;
