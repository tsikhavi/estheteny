import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Link from 'next/link';
import Image from 'next/image';

const ProductMenuModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [cleaningDate, setCleaningDate] = useState(new Date());

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const addToCart = (productName, price) => {
    setSelectedProducts([...selectedProducts, { productName, price }]);
  };

  const calculateTotalPrice = () => {
    return selectedProducts.reduce((total, product) => total + product.price, 0);
  };

  const handleCheckout = () => {
    // Perform any actions needed before navigating to the checkout page
    alert('You are being redirected to the Check Out Page');
    console.log('Checkout button clicked!');
  };

  return (
    <div className="relative">
      {/* Trigger Link */}
      <button
        onClick={openModal}
        className=" hover:text-gray-600 hover:bg-white lg:text-xl hover:border-gray-400 
              border bg-fuchsia-700 transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 
              ring-offset-fuchsia-700	focus:ring-fuchsia-500 rounded text-gray-200 px-4 sm:px-8 py-1 sm:py-3 text-sm
      
      "
      >
        Book Now
        <span className="inline-flex">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-4" viewBox="0 0 576 512">
            <path
              fill="currentColor"
              d="M566.6 54.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192-34.7-34.7c-4.2-4.2-10-6.6-16-6.6c-12.5 0-22.6 10.1-22.6 22.6v29.1L364.3 320h29.1c12.5 0 22.6-10.1 22.6-22.6c0-6-2.4-11.8-6.6-16l-34.7-34.7 192-192zM341.1 353.4L222.6 234.9c-42.7-3.7-85.2 11.7-115.8 42.3l-8 8C76.5 307.5 64 337.7 64 369.2c0 6.8 7.1 11.2 13.2 8.2l51.1-25.5c5-2.5 9.5 4.1 5.4 7.9L7.3 473.4C2.7 477.6 0 483.6 0 489.9C0 502.1 9.9 512 22.1 512l173.3 0c38.8 0 75.9-15.4 103.4-42.8c30.6-30.6 45.9-73.1 42.3-115.8z"
            />
          </svg>
        </span>
      </button>

      {/* Modal Container */}
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-auto bg-black bg-opacity-50">
          {/* Modal Content */}
          <div className="relative max-w-md p-4 mx-auto mt-10 bg-white rounded-md">
            {/* Close Button */}
            <button onClick={closeModal} className="absolute top-0 right-0 p-2 m-2 text-gray-700 hover:text-gray-900">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>

            {/* Product Menu */}
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-4">Products</h2>
              <ul>
                <li className="mb-4">
                  <div className="flex items-center justify-between">
                    <Image
                      width={18}
                      height={18}
                      src="/Images/IMG_20231202_215953_442.jpg"
                      alt="Regular Cleaning"
                      className="w-16 h-16 object-cover rounded mr-2"
                    />
                    <span>Regular Cleaning</span>
                    <button
                      onClick={() => addToCart('Regular Cleaning', 105)}
                      className="bg-fuchsia-500 hover:bg-fuchsia-600 text-white px-3 py-1 rounded"
                    >
                      Add to Cart
                    </button>
                    <Link href="/services">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4"
                        viewBox="0 0 192 512"
                        title="Product Information: Regular Cleaning"
                      >
                        <path
                          fill="currentColor"
                          d="M48 80a48 48 0 1 1 96 0A48 48 0 1 1 48 80zM0 224c0-17.7 14.3-32 32-32H96c17.7 0 32 14.3 32 32V448h32c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H64V256H32c-17.7 0-32-14.3-32-32z"
                        />
                      </svg>
                    </Link>
                  </div>
                </li>
                <li className="mb-4">
                  <div className="flex items-center justify-between">
                    <Image
                      width={18}
                      height={18}
                      src="/Images/nino-maghradze.jpg"
                      alt="Post Renovation"
                      className="w-16 h-16 object-cover rounded mr-2"
                    />
                    <span>Post Renovation/hr </span>
                    <button
                      onClick={() => addToCart('Post Renovation', 50)}
                      className="bg-fuchsia-500 hover:bg-fuchsia-600 text-white px-3 py-1 rounded"
                    >
                      Add to Cart
                    </button>
                    <Link href="/services">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4"
                        viewBox="0 0 192 512"
                        title="Product Information: Regular Cleaning"
                      >
                        <path
                          fill="currentColor"
                          d="M48 80a48 48 0 1 1 96 0A48 48 0 1 1 48 80zM0 224c0-17.7 14.3-32 32-32H96c17.7 0 32 14.3 32 32V448h32c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H64V256H32c-17.7 0-32-14.3-32-32z"
                        />
                      </svg>
                    </Link>
                  </div>
                </li>
                <li className="mb-4">
                  <div className="flex items-center justify-between">
                    <Image
                      width={18}
                      height={18}
                      src="/Images/work12.jpg"
                      alt="Deep Cleaning"
                      className="w-16 h-16 object-cover rounded mr-2"
                    />
                    <span>Deep Cleaning</span>
                    <button
                      onClick={() => addToCart('Deep Cleaning', 150)}
                      className="bg-fuchsia-500 hover:bg-fuchsia-600 text-white px-3 py-1 rounded"
                    >
                      Add to Cart
                    </button>
                    <Link href="/services">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4"
                        viewBox="0 0 192 512"
                        title="Product Information: Regular Cleaning"
                      >
                        <path
                          fill="currentColor"
                          d="M48 80a48 48 0 1 1 96 0A48 48 0 1 1 48 80zM0 224c0-17.7 14.3-32 32-32H96c17.7 0 32 14.3 32 32V448h32c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H64V256H32c-17.7 0-32-14.3-32-32z"
                        />
                      </svg>
                    </Link>
                  </div>
                </li>
                <li className="mb-4">
                  <div className="flex items-center justify-between">
                    <Image
                      width={18}
                      height={18}
                      src="/Images/IMG_20231212_204746_527.jpg"
                      alt="After Party"
                      className="w-16 h-16 object-cover rounded mr-2"
                    />
                    <span>After Party/hr</span>
                    <button
                      onClick={() => addToCart('After Party', 40)}
                      className="bg-fuchsia-500 hover:bg-fuchsia-600 text-white px-3 py-1 rounded"
                    >
                      Add to Cart
                    </button>
                    <Link href="/services">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4"
                        viewBox="0 0 192 512"
                        title="Product Information: Regular Cleaning"
                      >
                        <path
                          fill="currentColor"
                          d="M48 80a48 48 0 1 1 96 0A48 48 0 1 1 48 80zM0 224c0-17.7 14.3-32 32-32H96c17.7 0 32 14.3 32 32V448h32c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H64V256H32c-17.7 0-32-14.3-32-32z"
                        />
                      </svg>
                    </Link>
                  </div>
                </li>
              </ul>
            </div>

            {/* Cart Section */}
            <div className="mt-6">
              <h3 className="text-lg font-bold mb-2">Shopping Cart</h3>
              <ul>
                {selectedProducts.map((product, index) => (
                  <li key={index} className="mb-2">
                    {product.productName} - ${product.price.toFixed(2)}
                  </li>
                ))}
              </ul>

              {/* Datetime Picker */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Pick Date and Time</label>
                <DatePicker
                  selected={cleaningDate}
                  onChange={date => setCleaningDate(date)}
                  showTimeSelect
                  dateFormat="MMMM d, yyyy h:mm aa"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                />
              </div>

              <p className="font-bold mt-2">Total: ${calculateTotalPrice().toFixed(2)}</p>
            </div>

            {/* Checkout Button */}
            <button
              onClick={handleCheckout}
              className="bg-fuchsia-500 hover:bg-fuchsia-600 text-white px-4 py-2 mt-4 rounded"
            >
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductMenuModal;
