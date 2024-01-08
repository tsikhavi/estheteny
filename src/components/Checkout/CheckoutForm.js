import React, { useState } from 'react';
import DateTime from '../datepicker';

const CheckoutForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    // Add more fields for bank details
  });

  const handleInputChange = e => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCheckout = () => {
    // Logic to handle checkout
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-full max-w-xl bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-semibold mb-6">New York Cleaning Services</h2>

        {/* Checkout form */}
        <form className="space-y-4">
          {/* Order Summary */}
          <div className="bg-gray-100 rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-4">Cleaning Services</h3>
            {/* Cleaning service items */}
            <div className="flex justify-between items-center py-2 border-b">
              <div className="flex-grow">
                <p className="text-sm">Regular Cleaning</p>
                <p className="text-xs text-gray-500">Standard cleaning service</p>
              </div>
              <p className="text-sm">$120.00</p>
            </div>
            <div className="flex justify-between items-center py-2 border-b">
              <div className="flex-grow">
                <p className="text-sm">Deep Cleaning</p>
                <p className="text-xs text-gray-500">Thorough deep cleaning</p>
              </div>
              <p className="text-sm">$180.00</p>
            </div>
            <div className="flex justify-between items-center py-2 border-b">
              <div className="flex-grow">
                <p className="text-sm">Post Renovation Cleaning</p>
                <p className="text-xs text-gray-500">Cleaning after renovation</p>
              </div>
              <p className="text-sm">$250.00</p>
            </div>
            <div className="flex justify-between items-center py-2 border-b">
              <div className="flex-grow">
                <p className="text-sm">After Party Cleaning</p>
                <p className="text-xs text-gray-500">Cleaning after events</p>
              </div>
              <p className="text-sm">$200.00</p>
            </div>
            {/* Edit order summary button */}
            <button className="mt-4 text-sm text-cyan-500 hover:underline">Edit Order</button>
          </div>

          {/* Contact & Service Info */}
          <div className="space-y-4">
            {/* Name input */}
            <div className="flex flex-col">
              <label className="text-sm mb-1">Your Name</label>
              <input
                type="text"
                className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none"
                placeholder="John Doe"
              />
            </div>

            {/* Email input */}
            <div className="flex flex-col">
              <label className="text-sm mb-1">Your Email</label>
              <input
                type="email"
                className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none"
                placeholder="john@example.com"
              />
            </div>

            {/* Address input */}
            <div className="flex flex-col">
              <label className="text-sm mb-1">Service Address</label>
              <input
                type="text"
                className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none"
                placeholder="123 Main St, New York"
              />
            </div>

            {/* Service selection */}
            <div className="flex flex-col">
              <label className="text-sm mb-1">Select Service</label>
              <select className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none">
                <option value="regular">Regular Cleaning</option>
                <option value="deep">Deep Cleaning</option>
                <option value="post_renovation">Post Renovation Cleaning</option>
                <option value="after_party">After Party Cleaning</option>
              </select>
            </div>
            <div className="flex flex-col"></div>

            <div>
              <DateTime />
            </div>

            {/* Submit button */}
            <button
              type="submit"
              className="bg-cyan-500 text-white py-2 rounded-md text-sm hover:bg-cyan-600 transition duration-300"
            >
              Book Service
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CheckoutForm;
