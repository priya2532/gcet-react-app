import React, { useContext } from 'react';
import { AppContext } from '../App';
import './Cart.css';

export default function Cart() {
  const { cart } = useContext(AppContext);

  if (!cart.length) return <div>Your cart is empty</div>;

  return (
    <div>
      <h2>My Cart</h2>
      <div classNmae="cart-container"></div>
      {cart.map(item => (
        <div key={item._id} className="cart-item">
          <h3>{item.name}</h3>
          <p>Price: ₹{item.price}</p>
          <p>Quantity: {item.quantity}</p>
        </div>
      ))}
    </div>
  );
}
