import React from 'react';

const CartItem = ({ item, removeFromCart, updateQuantity }) => {
  return (
    <div className="flex justify-between items-center border-b py-2">
      <span>{item.name}</span>
      <input
        type="number"
        value={item.quantity}
        onChange={e => updateQuantity(item.id, parseInt(e.target.value))}
        className="w-16 border px-2 py-1 rounded"
      />
      <button onClick={() => removeFromCart(item.id)} className="text-red-500">
        Remove
      </button>
    </div>
  );
};

export default CartItem;
