import React from 'react';
import '../styles/Order.scss';

const Order = () => {
	return (
		<div className="Order">
			<p>
				<span>01.01.22</span>
				<span>5 articles</span>
			</p>
			<p>$120.00</p>
			<img src="./icons/flechita.svg" alt="arrow" />
		</div>
	);
}

export default Order;