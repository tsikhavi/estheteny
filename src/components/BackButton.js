import React from 'react';

const BackButton = () => {
  const goBack = () => {
    window.history.go(-1); // This function navigates the user to the previous page
  };

  return (
    <button
      onClick={goBack}
      className=" text-white  rounded-md shadow-md cursor-pointer transition duration-300 
      ease-in-out hover:bg-allports-600  bg-red-500 px-3.5 py-2.5 text-sm font-semibold
       focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 
       focus-visible:outline-indigo-600 capitalize"
    >
      Go back
    </button>
  );
};

export default BackButton;
