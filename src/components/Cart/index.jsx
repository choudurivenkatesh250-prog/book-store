import './index.css'
import CartItem from '../CartItem'
import Header from '../Header'
import CartContext from '../../context/CartContext'
import { use } from 'react'
const Cart = () => {
    const { cartList } = use(CartContext)
    return (
        <div className='cart-container'>
            <Header />
            <h1>Cart Items</h1>

            <ul>
                {cartList.map((eachObj) => {
                    return <CartItem details={eachObj} key={eachObj.Id} />
                })}
            </ul>
        </div>
    )
}
export default Cart