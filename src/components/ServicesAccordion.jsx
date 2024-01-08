import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const ServicesAccordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  const [isExpanded, setIsExpanded] = useState(false);

  const handleButtonClick = () => {
    setIsExpanded(!isExpanded); // Toggles between expanded and collapsed state
  };

  return (
    <div className="transition my-2 hover:bg-white">
      {/* header */}
      <div
        className="accordion-header bg-allports-50 cursor-pointer shadow-none border-px border-allports-500 rounder-lg ease-in-out delay-150 flex space-x-5 px-5 items-center h-16"
        onClick={toggleAccordion}
      >
        <div className="grid grid-cols-4 gap-8 w-full">
          <div className="col-start-1 col-end-4">
            <h3 className="text-md font-semibold order-first hover:order-last ml-4">{title}</h3>
          </div>

          <div className="flex justify-end">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className={`w-6 h-6 transform ${isOpen ? 'rotate-90' : ''}`}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
          </div>
        </div>
      </div>
      {/* Content */}
      <div
        className={`accordion-content px-5 pt-0 overflow-hidden bg-white overflow-y transition-max-h ${
          isOpen ? 'max-h-[100%]' : 'max-h-0'
        }`}
      >
        <p className="leading-6 font-light pl-2 my-2 text-justify">{content}</p>
        <Datalist />
        <button className="rounded-lg flex bg-allports-600 hover:bg-allports-700 text-white font-medium font-sm px-6 py-2 my-10 ml-9">
          <span className="inline-flex gap-2 items-center">
            Book Service
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="px-px w-4 h-4">
              <path d="M1.75 1.002a.75.75 0 1 0 0 1.5h1.835l1.24 5.113A3.752 3.752 0 0 0 2 11.25c0 .414.336.75.75.75h10.5a.75.75 0 0 0 0-1.5H3.628A2.25 2.25 0 0 1 5.75 9h6.5a.75.75 0 0 0 .73-.578l.846-3.595a.75.75 0 0 0-.578-.906 44.118 44.118 0 0 0-7.996-.91l-.348-1.436a.75.75 0 0 0-.73-.573H1.75ZM5 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM13 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" />
            </svg>
          </span>
        </button>
        <Link
          href="/products"
          className="mx-4 inline-flex link-underline:hover link-underline link-underline-black my-2 underline underline-offset-8 hover:no-underline"
        >
          <span>
            Learn More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 inline-flex"
            >
              <path
                fillRule="evenodd"
                d="M8.914 6.025a.75.75 0 0 1 1.06 0 3.5 3.5 0 0 1 0 4.95l-2 2a3.5 3.5 0 0 1-5.396-4.402.75.75 0 0 1 1.251.827 2 2 0 0 0 3.085 2.514l2-2a2 2 0 0 0 0-2.828.75.75 0 0 1 0-1.06Z"
                clipRule="evenodd"
              />
              <path
                fillRule="evenodd"
                d="M7.086 9.975a.75.75 0 0 1-1.06 0 3.5 3.5 0 0 1 0-4.95l2-2a3.5 3.5 0 0 1 5.396 4.402.75.75 0 0 1-1.251-.827 2 2 0 0 0-3.085-2.514l-2 2a2 2 0 0 0 0 2.828.75.75 0 0 1 0 1.06Z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </Link>
      </div>
    </div>
  );
};

export default ServicesAccordion;



function Datalist() {
  return (
    <>
      <div className="flow-root rounded-lg border-none py-3 shadow-sm">
        <dl className="-my-3 divide-y divide-gray-100 text-sm">
          <p className="flex justify-center mx-auto text-allports-400 my-4 border-none text-sm text-center">
            Service Description
          </p>
          <hr className="h-px bg-allports-600 rounded mx-10" />
          <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
            <dt className="font-medium text-gray-900">Kitchen Cleaning</dt>
            <dd className="text-gray-700 sm:col-span-2">
              <ul>
                <li>Wipe counters</li>
                <li>Wipe in/outside microwave</li>
                <li>Wipe stove top</li>
                <li>Wipe down refrigerator outside</li>
                <li>Scrub kitchen sinks</li>
                <li>Wipe outside of dishwasher</li>
                <li>Empty trash can</li>
                <li>Sweep and mop floor</li>
              </ul>
            </dd>
          </div>

          <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
            <dt className="font-medium text-gray-900">Bedrooms</dt>
            <dd className="text-gray-700 sm:col-span-2">
              <ul>
                <li>Dust and polish the furniture</li>
                <li>Dust pictures frames</li>
                <li>Make the bed</li>
                <li>Emptying trash can</li>
                <li>Sweep, vacuum, or mop floor</li>
              </ul>
            </dd>
          </div>

          <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
            <dt className="font-medium text-gray-900">Living/ Dining Room</dt>
            <dd className="text-gray-700 sm:col-span-2">
              <ul>
                <li>Dust and polish furniture</li>
                <li>Dust picture frames</li>
                <li>Sweep, vacuum, or mop floor</li>
              </ul>
            </dd>
          </div>

          <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
            <dt className="font-medium text-gray-900">BathRoom</dt>
            <dd className="text-gray-700 sm:col-span-2">
              <ul>
                <li>Clean and disinfect shower tub</li>
                <li>Clean and disinfect toilet</li>
                <li>Clean mirrors</li>
                <li>Clean sinks</li>
                <li>Empty trash can</li>
                <li>Sweep, vacuum, or mop floor</li>
              </ul>
            </dd>
          </div>
        </dl>
      </div>
    </>
  );
}
