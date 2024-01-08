import React, { useState } from 'react';
import { useRouter } from 'next/router';

// Sanitize input to prevent XSS attacks
const sanitizeInput = input => {
  const htmlEntities = {
    '<': '&lt;',
    '>': '&gt;',
    '&': '&amp;',
    '"': '&quot;',
    "'": '&#39;',
  };

  return input.replace(/[<>&"']/g, match => htmlEntities[match]);
};

// Strictly allow only alphanumeric characters, spaces, and specific symbols
const strictSanitize = input => {
  return input.replace(/[^a-zA-Z0-9\s!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g, '');
};

// Get sanitized input combining strict and basic sanitization
const getSanitizedInput = input => {
  const sanitizedInput = strictSanitize(input);
  return sanitizeInput(sanitizedInput);
};

const Banner = () => {
  const [message, setMessage] = useState('');
  const router = useRouter(); // Initialize Next.js router

  const redirectToServices = input => {
    const sanitizedInput = getSanitizedInput(input);
    router.push('/services');
  };

  const getName = () => {
    const input = prompt('Enter your Guest Name below');
    if (input) {
      setMessage(input);
      redirectToServices(input);
    }
  };

  return (
    <header className="bg-gray-50">
      <div className="mx-auto max-w-screen-xl px-4 py-4 sm:px-6 sm:py-6 lg:px-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="text-center sm:text-left">
            <div>
              {message ? (
                <h1 className="text-2xl font-bold inline-flex text-gray-900 capitalize sm:text-3xl">
                  Welcome to Esthete Cleaning, {message}
                </h1>
              ) : (
                <h1 className="text-2xl font-bold inline-flex text-gray-900 capitalize sm:text-3xl">
                  Welcome to Esthete Cleaning
                </h1>
              )}
            </div>
            <p className="mt-1.5 text-sm text-gray-500">Book Cleaning 🎉</p>
          </div>

          <div className="mt-4 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center">
            <button
              className="inline-flex items-center uppercase justify-center gap-1.5 rounded-lg border border-gray-200 bg-allports-200 hover:bg-allports-300 px-5 py-3 text-gray-500 transition hover:text-gray-700 focus:outline-none focus:ring"
              type="button"
              onClick={getName}
            >
              <span className="text-sm inline-flex gap-2 font-medium">
                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512">
                  <path
                    fill="currentColor"
                    d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"
                  />
                </svg>
                <svg
                  className="inline-flex"
                  xmlns="http://www.w3.org/2000/svg"
                  height="16"
                  width="16"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M352 96l64 0c17.7 0 32 14.3 32 32l0 256c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l64 0c53 0 96-43 96-96l0-256c0-53-43-96-96-96l-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32zm-9.4 182.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L242.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l210.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"
                  />
                </svg>
              </span>
            </button>
            <button
              className="block rounded-lg bg-allports-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-allports-700 focus:outline-none focus:ring"
              type="button"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Banner;
