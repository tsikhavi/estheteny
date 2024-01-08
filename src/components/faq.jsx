import { useState } from 'react';

export default function Accordion(props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border rounded-md mx-10 mb-2">
      <button
        className="w-full p-4 text-left bg-white px-10 border-allports-50 transition duration-300 flex justify-between items-center"
        onClick={toggleAccordion}
      >
        <span>{props.title}</span>
        <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-90' : 'rotate-0'}`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 rounded-full"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
        </span>
      </button>
      {isOpen && <div className="p-4 border-2 shadow font-serif">{props.children}</div>}
    </div>
  );
}
