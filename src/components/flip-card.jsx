import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import Image from 'next/image';

function FlipCard() {
  const [flips, setFlips] = useState([false, false, false, false]);

  const frontContents = ['Regular Cleaning', 'Deep Cleaning', 'Post-renovation Cleaning', 'After Party Cleaning'];
  const backContents = [
    'Experience consistent freshness with our regular cleaning services, designed to maintain immaculate spaces week after week, tailored to fit your schedule and needs.',
    'Revitalize your surroundings with our comprehensive deep cleaning solutions, targeting hidden dirt and grime, ensuring a thorough and revitalizing cleanse for a healthier environment.',
    'Our meticulous post-renovation cleaning service is your answer to a spotless space post-construction, eliminating debris and dust, leaving your newly renovated area gleaming and ready to enjoy.',
    'Let us handle the aftermath of your celebration with precision - our after-party cleaning service swiftly restores your space to its pre-celebration state, ensuring a hassle-free and immaculate post-event environment.',
  ];

  const imageUrls = ['/esthete.png', '/esthete.png', '/esthete.png', '/esthete.png'];

  const handleFlip = index => {
    const newFlips = [...flips];
    newFlips[index] = !newFlips[index];
    setFlips(newFlips);
  };

  return (
    <div className="flex text-base">
      {flips.map((isFlipped, index) => (
        <div key={index} className="m-4">
          <Flip
            key={index}
            isFlipped={isFlipped}
            flipDirection="vertical"
            frontContent={frontContents[index]}
            backContent={backContents[index]}
            image={imageUrls[index]} // Pass image URL as prop
            setFlip={() => handleFlip(index)}
          />
        </div>
      ))}
    </div>
  );
}

function Flip({ isFlipped, flipDirection, frontContent, backContent, image, setFlip }) {
  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection={flipDirection}>
      <div className="bg-gradient w-300 h-200 text-gray-600 rounded-lg text-center p-20">
        <Image src={image} alt={frontContent} className="mx-auto mb-4 p-2" width={52} height={52} />{' '}
        {/* Display image */}
        {frontContent}
        <br />
        <br />
        <button
          className="w-100 px-10 text-fuchsia-500 bg-radial hover:bg-gray-400 font-bold rounded-md"
          onClick={setFlip}
        >
          More
        </button>
      </div>
      <div className="bg-fuchsia-100 w-300 h-200 text-gray-700 rounded-lg text-left p-10">
        {backContent}
        <br />
        <button className="w-100 px-10 text-fuchsia-700 bg-gradient font-bold rounded-md mt-8" onClick={setFlip}>
          Back
        </button>
      </div>
    </ReactCardFlip>
  );
}

export default FlipCard;
