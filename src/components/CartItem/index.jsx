import "./index.css";
import CartContext from "../../context/CartContext";
import { useContext } from "react";
import { FiMinus, FiPlus, FiTrash2 } from "react-icons/fi";
const CartItem = ({ details }) => { const { coverImage, Title, Author, price, Id, quantity = 1 } = details; const { deleteCartItem, increaseItem, decreaseItem } = useContext(CartContext); return <li className="cart-item"><img src={coverImage} alt={`Cover of ${Title}`} className="cart-img" /><div className="cart-book-info"><h3>{Title}</h3><p>{Author || "Featured author"}</p><strong>${Number(price || 0).toFixed(2)}</strong></div><div className="quantity-controls" aria-label={`Quantity for ${Title}`}><button onClick={() => decreaseItem(Id)} disabled={quantity === 1} aria-label="Decrease quantity"><FiMinus /></button><span>{quantity}</span><button onClick={() => increaseItem(Id)} aria-label="Increase quantity"><FiPlus /></button></div><strong className="cart-total">${(Number(price || 0) * quantity).toFixed(2)}</strong><button onClick={() => deleteCartItem(Id)} className="delete-btn" aria-label={`Remove ${Title}`}><FiTrash2 /></button></li>; };
export default CartItem;
