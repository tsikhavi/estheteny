import React from 'react';
import Image from 'next/image';

const CookieComponent = () => {
  const generateUniqueToken = () => {
    // Generate a timestamp (convert to string to remove symbols)
    const timestamp = new Date().getTime().toString();

    // Generate a random number and convert it to a string
    const random = Math.random().toString();

    // Concatenate the timestamp and random number to create a unique token
    const uniqueToken = timestamp + random;

    return uniqueToken;
  };
  const handleSetCookie = () => {
    // Generate a unique session token
    const uniqueSessionToken = generateUniqueToken();

    // Set a cookie with the unique identifier/token for session management
    document.cookie = `sessionID=${uniqueSessionToken}; path=/; SameSite=Strict`;

    alert('Session cookie set!');
  };

  // ... other handle functions ...

  const handleAccept = () => {
    // Call the necessary handle functions to set cookies or perform other actions
    handleSetCookie();
    // Call other handle functions as needed

    // Close the cookie policy div or perform any other action
    closeCookiePolicy();
  };

  const closeCookiePolicy = () => {
    const cookiePolicyDiv = document.querySelector('.cookie-policy');

    // Check if the element exists
    if (cookiePolicyDiv) {
      // Add a class to hide the element (assuming you have a CSS class for hiding)
      cookiePolicyDiv.classList.add('');
      // You can implement the logic to close the cookie policy div here
      console.log('Closing cookie policy...');
    }

    return (
      <>
        <div className="fixed cookie-policy bottom-0 right-0 mb-4 mr-4 w-64">
          <div className="bg-white rounded-lg shadow-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center">
                <Image
                  src="https://www.svgrepo.com/show/401340/cookie.svg"
                  alt="Cookie"
                  width={40}
                  height={40}
                  className="h-6 w-6 mr-2"
                />
                <span className="text-gray-700 font-bold text-sm">Cookie Policy</span>
              </div>
              <button className="text-gray-500 hover:text-gray-700 focus:outline-none">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
            <p className="text-gray-600 text-sm">
              We use cookies to enhance your experience. By continuing to visit this site, you agree to our use of
              cookies.
            </p>
            <button
              onClick={handleAccept}
              className="mt-4 bg-allports-500 hover:bg-allports-600 text-white font-bold py-2 px-4 rounded"
            >
              Accept
            </button>
          </div>
        </div>
      </>
    );
  };
};
export default CookieComponent;
