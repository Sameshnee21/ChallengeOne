
/* Shopping Cart Page */

import React from "react";
import "./Cart.css";
import CartItem from "./CartItem";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { PRODUCTS } from "../../products";

export function Cart() {
  const { cart, getTotalAmount } = useContext(CartContext);
  let total = getTotalAmount();

  return (
    <div className="cart">
      <div>
        <h1>FAVOURITES LIST...</h1>
        <h2>Click the - button to remove the recipes from your list.</h2>
      </div>
      <div className="cart">
        {PRODUCTS.map((product) => {
          if (cart[product.id] !== 0) {
            return <CartItem key={product.id} data={product} />;
          }
        })}
      </div>

      {/*{total > 0 ? (
        <div className="checkout">
          <p>Subtotal: ${total}</p>
          <button>Checkout</button>
          <button>Continue Shopping</button>
       </div>
      ) : (
       <div className="checkout">
         <h4>Your Cart is Empty.</h4>
          <button>Continue shopping</button>
        </div>
     )}*/}
   </div>
  );
}
