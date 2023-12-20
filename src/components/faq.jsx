import { useState } from 'react';

export default function Accordion(props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border rounded-md mb-1">
      <button
        className="w-full p-4 text-left bg-gray-200 px-10 hover:bg-gray-300 transition duration-300 flex justify-between items-center"
        onClick={toggleAccordion}
      >
        <span>{props.title}</span>
        <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
          &#9660;
        </span>
      </button>
      {isOpen && <div className="p-4 bg-white">{props.children}</div>}
    </div>
  );
}
