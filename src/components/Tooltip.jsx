import React from 'react';

const Tooltip = () => {
  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold mb-4">Basic Tooltip</h2>
      <p>Move the mouse over the text below:</p>

      <div className="relative inline-block">
        <span className="border-b-2 border-dotted border-black cursor-pointer hover:border-transparent">
          Hover over me
        </span>
        <span className="absolute bg-black text-white text-center rounded-md py-2 px-4 bottom-full left-1/2 -translate-x-1/2 invisible opacity-0 transition-all duration-300">
          Tooltip text
        </span>
      </div>

      <p className="mt-4">
        Note that the position of the tooltip text isn&apos;t very good. Go back to the tutorial and continue reading on
        how to position the tooltip in a desirable way.
      </p>
    </div>
  );
};

export default Tooltip;
