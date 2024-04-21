import React from "react";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";

function Product({ data }) {
  const { productImage, price, id, productName } = data;
  const { addToCart, cart } = useContext(CartContext);
  let itemQuantity = cart[id];

  return (
    <div className="product">
      <img src={productImage} />
      <div className="description">
        <p>{productName}</p>
        {/*<p>Price: ${price}</p>*/}
      </div>
      <button className="addToCartBttn" onClick={() => addToCart(id)}>
        Add Recipe to List 
      </button>
      <button className="Info">
        info
      </button>
    </div>
  );
}

export default Product;