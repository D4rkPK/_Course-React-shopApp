import React from "react";
import "../styles/ProductInfo.scss";
import addToCart from '@icons/bt_add_to_cart.svg';

const ProductInfo = () => {
  return (
    <>
      <img
        src="https://images.pexels.com/photos/1869107/pexels-photo-1869107.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        alt="cactus"
      />
      <div className="ProductInfo">
        <p>$80.00</p>
        <p>Cactus</p>
        <p>
          A cactus is a member of the plant family Cactaceae, a family
          comprising about 127 genera with some 1750 known species of the order
          Caryophyllales.
        </p>
        <button className="primary-button add-to-cart-button">
          <img src={addToCart} alt="add to cart" />
          Add to cart
        </button>
      </div>
    </>
  );
};

export default ProductInfo;
