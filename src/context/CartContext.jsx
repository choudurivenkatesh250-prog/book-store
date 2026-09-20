import { createContext } from "react";
const CartContext = createContext({ cartList: [], wishlist: [], addCartItem: () => {}, deleteCartItem: () => {}, increaseItem: () => {}, decreaseItem: () => {}, clearCart: () => {}, toggleWishlist: () => {} });
export default CartContext;
