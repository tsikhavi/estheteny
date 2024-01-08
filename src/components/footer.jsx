import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import BackToTopButton from './BackToTopButton';
import CookieComponent from '@/CookieComponent';
import PasswordInput from '@/components/TogglePassword';

export default function Footer() {
  const [year, setYear] = useState(0);

  useEffect(function () {
    setYear(getYear());
  }, []);

  function getYear() {
    var today = new Date();
    return today.getFullYear();
  }

  return (
    <footer className=" mt-8 bg-gradient-to-l from-allports-200 to-allports-100 text-center text-allports-900 text-base lg:text-left">
      <div>
        <BackToTopButton />
      </div>
      <div className="flex items-center justify-center border-b-2 border-gray-200 p-6 dark:border-gray-500 lg:justify-between">
        <div className="mr-12 hidden lg:block">
          <span className="text-allports-100">Get connected with us on social networks:</span>
        </div>
        {/* <!-- Social network icons container --> */}
        <div className="flex justify-center">
          <Link
            className="mr-6 text-allports-900 text-base hover:text-allports-700 inline-flex"
            target="blank"
            href="https://www.instagram.com/cleaning_esthete_nyc/"
          >
            Instagram
            <span className="inline-flex px-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 448 512">
                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
              </svg>
            </span>
          </Link>
        </div>
      </div>

      {/* <!-- Main container div: holds the entire content of the footer, including four sections (TW Elements, Products, Useful links, and Contact), with responsive styling and appropriate padding/margins. --> */}
      <div className="mx-6 py-10 text-center md:text-left">
        <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* <!-- Quote --> */}
          <div className="">
            <h6 className="mb-4 flex items-center justify-center font-semibold uppercase md:justify-start">
              <Image className="mr-3 " src="/esthete.png" alt="" width={50} height={50} />
              Esthete Cleaning
            </h6>
            <p className="text-allports-800">
              Life&apos;s too short! Let ESTHETE CLEANING take the hassle out of cleaning your home. You are a few
              clicks away from a stress-free life!
            </p>
          </div>
          {/* <!-- Products section --> */}
          <div className="">
            <h6 className="mb-4 flex justify-center font-semibold text-allports-700 uppercase md:justify-start">
              Products
            </h6>
            <p className="mb-4">
              <Link className="text-allports-700  hover:text-allports-500 " href="/">
                Regular Cleaning
              </Link>
            </p>
            <p className="mb-4">
              <Link className="text-allports-700  hover:text-allports-500 " href="/">
                Deep Cleaning
              </Link>
            </p>
            <p className="mb-4">
              <Link className="text-allports-700  hover:text-allports-500 " href="/">
                Post Renovation Cleaning
              </Link>
            </p>
            <p>
              <Link className="text-allports-700  hover:text-allports-500 " href="/">
                After party clean up
              </Link>
            </p>
          </div>
          {/* <!-- Useful links section --> */}
          <div className="">
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">Useful links</h6>
            <p className="mb-4">
              <Link className="text-allports-700  hover:text-allports-500 " href="/book">
                Pricing
              </Link>
            </p>
            <p className="mb-4">
              <Link className="text-allports-700  hover:text-allports-500 " href="/services">
                Services
              </Link>
            </p>
            <p className="mb-4">
              <Link className="text-allports-700  hover:text-allports-500 " href="/extra-services">
                Offers
              </Link>
            </p>
            <p>
              <Link
                className="text-allports-700  hover:text-allports-500 "
                href="mailto:esthete.cleaning@gmail.com?
            cc=nesssh17@gmail.com
            &bcc=sautisapp@gmail.com
            &subject=Errors in website
            #body=A problem with the site"
              >
                Help
              </Link>
            </p>
          </div>
          {/* <!-- Contact section --> */}
          <div>
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">Contact</h6>
            <p className="mb-4 flex items-center justify-center md:justify-start">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="mr-3 h-5 w-5">
                <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
              </svg>
              New York, NY 10012, US
            </p>
            <p className="mb-4 flex items-center justify-center md:justify-start text-allports-700  hover:text-allports-500">
              <Link
                href="mailto:esthete.cleaning@gmail.com?
            cc=nesssh17@gmail.com
            &bcc=sautisapp@gmail.com
            &subject=Cleaning Enquiries
            #body=I'd like to book an appointment"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="inline-flex mr-3 h-5 w-5"
                >
                  <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                  <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                </svg>
                esthete.cleaning@gmail.com
              </Link>
            </p>
            <p className="mb-4 flex items-center justify-center md:justify-start text-allports-700  hover:text-allports-500">
              <Link href="tel:+16465780645">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className=" inline-flex mr-3 h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                    clipRule="evenodd"
                  />
                </svg>
                +1 (646)578-0645
              </Link>
            </p>
            <p className="flex items-center justify-center md:justify-start text-allports-700  hover:text-allports-500">
              <Link href="https://wa.me/16465780645">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="inline-flex mr-3 h-5 w-5"
                  viewBox="0 0 448 512"
                  title="click to connect"
                >
                  <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                </svg>
                Whatsapp
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* <!--Copyright section--> */}
      <div className="bg-allports-900 p-6 text-center ">
        
        <span>© {year} All Right Reserved: </span>
        <Link className="font-semibold text-allports-100  " href="/">
          Esthete cleaning
        </Link>
        <span> | Created by: </span>
        <Link className="font-semibold text-allports-100  " href="/">
          Sautis
        </Link>
      </div>
    </footer>
  );
}
