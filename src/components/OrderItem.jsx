import React from "react";
import "../styles/OrderItem.scss";

const OrderItem = () => {
  return (
    <div className="OrderItem">
      <figure>
        <img
          src="https://images.pexels.com/photos/1869107/pexels-photo-1869107.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          alt="cactus"
        />
      </figure>
      <p>$80.00</p>
      <p>Cactus</p>
      <img src="./icons/icon_close.png" alt="close" />
    </div>
  );
};

export default OrderItem;
