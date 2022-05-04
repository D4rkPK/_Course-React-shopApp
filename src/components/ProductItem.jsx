import React, { useState } from "react";
import "../styles/ProductItem.scss";
import addToCart from '@icons/bt_add_to_cart.svg';

const ProductItem = () => {
  
  const [cart, setCart] = useState([]);
  const handleClick = () =>{
    setCart([]);
  }
  return (
    <div className="ProductItem">
      <img
        src="https://images.pexels.com/photos/1869107/pexels-photo-1869107.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        alt="cactus"
      />
      <div className="product-info">
        <div>
          <p>$80.00</p>
          <p>Cactus</p>
        </div>
        <figure onClick={handleClick}>
          <img src={addToCart} alt="" />
        </figure>
      </div>
    </div>
  );
};

export default ProductItem;
