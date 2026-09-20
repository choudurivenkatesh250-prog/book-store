import "./index.css";
import CartItem from "../CartItem";
import Header from "../Header";
import CartContext from "../../context/CartContext";
import { useContext } from "react";
import { Link } from "react-router";
import { FiArrowRight, FiShoppingBag } from "react-icons/fi";
const Cart = () => { const { cartList, clearCart } = useContext(CartContext); const subtotal = cartList.reduce((sum, item) => sum + Number(item.price || 0) * item.quantity, 0); return <div><Header /><main className="cart-page"><div className="cart-heading"><p className="eyebrow">Your reading list</p><h1>Shopping bag</h1></div>{cartList.length ? <div className="cart-layout"><section className="cart-items"><div className="cart-list-header"><span>{cartList.length} {cartList.length === 1 ? "title" : "titles"}</span><button onClick={clearCart}>Clear bag</button></div><ul>{cartList.map((book) => <CartItem details={book} key={book.Id} />)}</ul></section><aside className="order-summary"><h2>Order summary</h2><div><span>Subtotal</span><strong>${subtotal.toFixed(2)}</strong></div><div><span>Delivery</span><span>Calculated at checkout</span></div><hr /><div className="summary-total"><span>Total</span><strong>${subtotal.toFixed(2)}</strong></div><button className="primary-button checkout-button">Checkout <FiArrowRight /></button><p>Demo checkout — no payment will be taken.</p></aside></div> : <section className="empty-state cart-empty"><FiShoppingBag /><h2>Your bag is waiting for a great story.</h2><p>Browse the collection and add books you want to read.</p><Link to="/books" className="primary-button">Explore books <FiArrowRight /></Link></section>}</main></div>; };
export default Cart;
