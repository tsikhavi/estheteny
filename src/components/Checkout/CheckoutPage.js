import React from 'react';
import Cart from '@/components/Cart/Cart';
import CheckoutForm from '@/components/Checkout/CheckoutForm';

const CheckoutPage = () => {
  return (
    <div>
      <h2 className="text-xl font-semibold">Cart</h2>
      <Cart />
      <h2 className="text-xl font-semibold">Checkout</h2>
      <CheckoutForm />
    </div>
  );
};

export default CheckoutPage;
