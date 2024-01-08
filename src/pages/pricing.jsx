import React, { useState } from 'react';
import Head from 'next/head';

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleAccordionClick = index => {
    setActiveIndex(prevIndex => (prevIndex === index ? null : index));
  };

  return (
    <div className="h-screen bg-gradient-to-br from-pink-50 to-allports-100 grid place-items-center">
      <div className="w-6/12 mx-auto rounded border">
        <div className="bg-white p-10 shadow-sm">
          <h3 className="text-lg font-medium text-gray-800">Several Windows stacked on each other</h3>
          <p className="text-sm font-light text-gray-600 my-3">
            The accordion is a graphical control element comprising a vertically stacked list of items such as labels or
            thumbnails
          </p>
          <div className="h-1 w-full mx-auto border-b my-5"></div>

          {/* Accordion Items */}
          {accordionData.map((item, index) => (
            <div key={index} className="transition hover:bg-allports-50">
              {/* Accordion Header */}
              <div
                className={`accordion-header cursor-pointer transition flex space-x-5 px-5 items-center h-16 ${
                  activeIndex === index ? 'bg-allports-50' : ''
                }`}
                onClick={() => handleAccordionClick(index)}
              >
                <i className={`fas ${activeIndex === index ? 'fa-minus' : 'fa-plus'}`}></i>
                <h3>{item.title}</h3>
              </div>

              {/* Accordion Content */}
              <div
                className="accordion-content px-5 pt-0 overflow-hidden"
                style={{ maxHeight: activeIndex === index ? 'max-content' : 0 }}
              >
                <p className="leading-6 font-light pl-9 text-justify">{item.content}</p>
                <button className="rounded-full bg-allports-600 text-white font-medium font-lg px-6 py-2 my-5 ml-9">
                  Learn more
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <section className="mt-4 text-center">
        Build with ❤️ by{' '}
        <a href="https://github.com/saadh393" target="_blank" rel="noopener noreferrer">
          Saad Hasan
        </a>
      </section>
    </div>
  );
};

const accordionData = [
  {
    title: 'What is term?',
    content:
      'Our asked sex point her she seems. New plenty she horses parish design you. Stuff sight equal of my woody. Him children bringing goodness suitable she entirely put far daughter.',
  },
  {
    title: 'When to use Accordion Components?',
    content:
      'Our asked sex point her she seems. New plenty she horses parish design you. Stuff sight equal of my woody. Him children bringing goodness suitable she entirely put far daughter.',
  },
  {
    title: 'How can it be defined?',
    content:
      'Our asked sex point her she seems. New plenty she horses parish design you. Stuff sight equal of my woody. Him children bringing goodness suitable she entirely put far daughter.',
  },
  {
    title: 'Chamber reached do he nothing be?',
    content:
      'Our asked sex point her she seems. New plenty she horses parish design you. Stuff sight equal of my woody. Him children bringing goodness suitable she entirely put far daughter.',
  },
];

export default function Pricing() {
  const siteTitle = 'pricing page';
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Esthete Cleaning - Landing" />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <title>{siteTitle}</title>
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <div className="mx-auto max-w-screen-2xl px-4 py-8 sm:px-6 lg:px-8 mt-80">
        <div className="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-3 pt-6 gap-8">
          <div>
            <div className=" w-full py-12 px-6 flex justify-center items-center ">
              <div>
                <div className="max-w-xs h-64 flex flex-col justify-between bg-white  rounded-lg border border-gray-400 mb-6 py-5 px-4">
                  <div>
                    <h4 className="text-gray-800 font-bold mb-3">13 things to work on</h4>
                    <p className="text-gray-800  text-sm">
                      Probabo, inquit, sic agam, ut labore et voluptatem sequi nesciunt, neque porro quisquam est, quid
                      malum, sensu iudicari, sed ut alterum.
                    </p>
                  </div>
                  <div>
                    <div className="flex items-center justify-between text-gray-800">
                      <p className="text-sm ">March 28, 2020</p>
                      <div className="w-8 h-8 rounded-full bg-gray-800 text-white flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon icon-tabler icon-tabler-pencil"
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" />
                          <path d="M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4" />
                          <line x1="13.5" y1="6.5" x2="17.5" y2="10.5" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
