import { Link } from "react-router";
import { useContext } from "react";
import { FiHeart, FiShoppingBag } from "react-icons/fi";
import { FaStar } from "react-icons/fa";
import "./index.css";
import CartContext from "../../context/CartContext";
import BookCover from "../BookCover";
const BookItem = ({ bookObj }) => { const { coverImage, Title, description, price, rating = 4.5, Author, Id } = bookObj; const { addCartItem, toggleWishlist, wishlist } = useContext(CartContext); const saved = wishlist.some((book) => book.Id === Id); return <li className="book-card"><Link to={`/books/${Id}`} className="book-cover-link"><BookCover src={coverImage} className="book-img" alt={`Cover of ${Title}`} /></Link><div className="book-card-content"><div className="book-meta"><span>{Author || "Featured author"}</span><button className={`heart-button ${saved ? "saved" : ""}`} onClick={() => toggleWishlist(bookObj)} aria-label={saved ? "Remove from wishlist" : "Save to wishlist"}><FiHeart /></button></div><Link to={`/books/${Id}`} className="book-title">{Title}</Link><p className="book-description">{description || "A compelling book for your next reading session."}</p><div className="rating"><FaStar /> <span>{rating}</span><span className="rating-note">Reader favorite</span></div><div className="card-footer"><strong>${Number(price || 0).toFixed(2)}</strong><button className="primary-button small" onClick={() => addCartItem(bookObj)}><FiShoppingBag /> Add</button></div></div></li>; };
export default BookItem;
