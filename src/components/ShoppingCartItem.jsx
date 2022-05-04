import React from "react";
import "../styles/ShoppingCartItem.scss";
import closeIcon from '@icons/icon_close.png';

const ShoppingCartItem = () => {
  return (
    <div className="ShoppingCartItem">
      <div>
        <figure>
          <img
            src="https://images.pexels.com/photos/7303417/pexels-photo-7303417.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
            alt="cactus"
          />
        </figure>
        <p>Cactus</p>
        <p>$120.00</p>
        <img src={closeIcon} alt="close" />
      </div>
    </div>
  );
};

export default ShoppingCartItem;
