import React from 'react';
import Image from 'next/image';

export default function Card() {
  return (
    <div className="flex flex-col rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] md:max-w-xl md:flex-row">
      <Image
        className="h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
        src="/esthete.png"
        width={32}
        height={32}
        alt="main-logo"
      />
      <div className="flex flex-col justify-start p-6">
        <h5 className="mb-2 text-xl font-medium text-neutral-800 ">Card title</h5>
        <p className="mb-4 text-base text-neutral-600 ">
          This is a wider card with supporting text below as a natural lead-in to additional content. This content is a
          little bit longer.
        </p>
        <p className="text-xs text-neutral-500 ">Last updated 3 mins ago</p>
      </div>
    </div>
  );
}
