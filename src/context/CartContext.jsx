import { createContext } from "react";

const CartContext = createContext({
  cartList: [],
  addCartItem: () => {},
  deleteCartItem: () => {},
  increaseItem: () => {},
  decreaseItem: () => {},
});

export default CartContext;