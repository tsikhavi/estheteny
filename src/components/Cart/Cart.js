import React, { useState } from 'react';
import CartItem from './CartItem';

const Cart = () => {
  const [cart, setCart] = useState([]);

  const removeFromCart = productId => {
    // Logic to remove item from cart
  };

  const updateQuantity = (productId, newQuantity) => {
    // Logic to update quantity in cart
  };

  return (
    <div>
      {cart.map(item => (
        <CartItem key={item.id} item={item} removeFromCart={removeFromCart} updateQuantity={updateQuantity} />
      ))}
    </div>
  );
};

export default Cart;
