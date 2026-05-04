import './index.css'
import CartContext from '../../context/CartContext'
import { useContext } from 'react'

const CartItem = ({ details }) => {
    const { coverImage, Title, price, Id, quantity = 1 } = details

    const { deleteCartItem, increaseItem, decreaseItem } = useContext(CartContext)

    const onClickDelete = () => deleteCartItem(Id)
    const onIncrease = () => increaseItem(Id)
    const onDecrease = () => decreaseItem(Id)

    const totalPrice = price * quantity

    return (
        <li className="cart-item">
            <img src={coverImage} alt={Title} className="cart-img" />

            <h3 className="cart-title">{Title}</h3>

            <p className="cart-price">${price}</p>

            <div className="quantity-controls">
                <button 
                    onClick={onDecrease} 
                    disabled={quantity === 1}
                    className="qty-btn"
                >
                    -
                </button>

                <span className="qty-value">{quantity}</span>

                <button 
                    onClick={onIncrease}
                    className="qty-btn"
                >
                    +
                </button>
            </div>

            <p className="cart-total">${totalPrice}</p>

            <button 
                onClick={onClickDelete} 
                className="delete-btn"
            >
                ✕
            </button>
        </li>
    )
}

export default CartItem