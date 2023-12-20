import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ContactUs from '@/components/contact-us';
import Layout from '@/components/layout/MainLayout';
import Cta from '@/components/cta';
import Accordion from '@/components/faq';
import Head from 'next/head';
import MyMenu from '@/components/menu';
import Navbar from '@/components/navbar';

export default function Landing() {
  const [show, setShow] = useState(false);
  const siteTitle = 'landing page';
  return (
    <Layout title={siteTitle}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Esthete Cleaning - Landing" />
        <title>{siteTitle}</title>
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <div className="py-12 bg-white overflow-y-hidden">
        {mainNavigation(setShow, show)}
        <Navbar />

        <div className="w-full px-6">
          <div className="mt-8 relative rounded-lg bg-white container mx-auto flex flex-col items-center pt-12 sm:pt-24 pb-24 sm:pb-32 md:pb-48 lg:pb-56 xl:pb-64">
            <div className="w-11/12 sm:w-2/3 mb-5 sm:mb-10">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center text-fuchsia-700 font-bold leading-tight">
                Best cleaning in NY, Manhattan, Brooklyn, Queens!{' '}
              </h1>
              <p className="text-base text-center text-fuchsia-600 py-4">
                <em>Book your cleaning in a few clicks. Free up time for life.</em>
              </p>
            </div>
            <div className="flex justify-center items-center mb-10 sm:mb-20">
              <button
                className=" hover:text-gray-600 hover:bg-white lg:text-xl hover:border-gray-400 
              border bg-fuchsia-700 transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 
              ring-offset-fuchsia-700	focus:ring-fuchsia-500 rounded text-gray-200 px-4 sm:px-8 py-1 sm:py-3 text-sm"
              >
                Book Now
              </button>
              <button
                className=" hover:text-gray-200 lg:text-xl 
              hover:border-fuchsia-600 ml-3 sm:ml-6 bg-transparent transition duration-150 
              ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 ring-offset-fuchsia-700
               focus:ring-white hover:bg-fuchsia-800 rounded border border-fuchsia-700   
               text-fuchsia-700  px-4 sm:px-8 py-1 sm:py-3 text-sm"
              >
                Offers
              </button>
            </div>
          </div>
        </div>
        <MyMenu />
        <Cta />
        <div>
        <h3 className="text-3xl text-center text-fuchsia-700 inline-flex">F.A.Q.S</h3>
          <Accordion title="What are the payment arrangements?">
            <ul>
              <li className="py-1">Secure your booking with a 50% pre-payment, with the remaining balance payable upon completion of services.</li>
      
            </ul>
          </Accordion>
          <Accordion title="What is the Satisfaction Guaranteed?">
            <div>
              <p>We prioritize customer satisfaction! Should you feel dissatisfied for any reason, kindly inform us within 48 hours of your cleaning appointment. We&apos;ll promptly dispatch another service professional at zero additional cost.</p>
            </div>
          </Accordion>
          <Accordion title="How soon can you arrive?">
            <div>
              <p>At times, our cleaning service providers may arrive within 3-4 hours, but we suggest booking your cleaning appointment at least 3 days in advance for the best experience!</p>
            </div>
          </Accordion>
          <Accordion title="Do I need to be at home during cleaning?">
            <div>
              <p>No worries, there&apos;s no need for you to be home during our service. We&apos;ll chat about the arrangements to ensure our cleaning providers can access your place.</p>
            </div>
          </Accordion>
          <Accordion title="What is your cancellation policy?">
            <div>
              <p>Please notify us no later than 24 hours before your appointment start time to avoid a fee.</p>
            </div>
          </Accordion>
          <Accordion title="How many cleaning service providers will you send?">
            <div>
              <p>Normally, we assign one service provider for apartment cleaning tasks. However, for more intensive jobs, the crew size will be decided based on the specific requirements of the task.
              </p>
            </div>
          </Accordion>
          <Accordion title="What is your pet policy?">
            <div>
              <p>We absolutely love pets and strive to create a pet-friendly cleaning experience! Yet, ensuring our staff&apos;s safety is crucial. If, unfortunately, your pet exhibits aggressive behavior, we may need to decline services and apply a cancellation fee.
              </p>
            </div>
          </Accordion>
          <Accordion title="How far in advance should I schedule an appointment?">
            <div>
              <p>For the best scheduling, we suggest booking your appointment three days in advance. However, we also offer same-day appointments in certain cases for your convenience!
              </p>
            </div>
          </Accordion>
          <Accordion title="What cleaning services are excluded from your cleaner's offerings?">
          <p> </p>
            <ul>
              <li className="py-1">
              Cleaning walls and ceilings
              </li>
              <li className="py-1">
              Exterior window cleaning
              </li>
              <li className="py-1">
              Moving furniture or objects over 35 pounds
              </li>
              <li className="py-1">
              Wiping TV screens or computer equipment
              </li>
              <li className="py-1">
              Reaching inaccessible heights without proper equipment
              </li>
              <li className="py-1">
              Meal preparation
              </li>
              <li className="py-1">
              Providing services related to children.
              </li>
              
      
            </ul>
          </Accordion>

          
        </div>
      </div>
    </Layout>
  );
}
function mainNavigation(setShow, show) {
  return (
    <nav className="w-full">
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center">
          <Image className="cursor-pointer w-8 sm:w-auto" src="/esthete.png" alt="logo" width={52} height={52} />
          <p className="text-base lg:text-2xl font-bold text-fuchsia-700 ml-2">Esthete Cleaning</p>
        </div>

        <div className="flex space-x-4">
          <div className="flex space-x-4">
            {/* Whatsapp Icon */}
            <button className="bg-none rounded-full p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="w-6 h-6 text-gray-500 hover:text-green-500"
              >
                <path
                  fill="currentColor"
                  d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"
                />
              </svg>
            </button>

            {/* Telegram Icon */}
            <button className="bg-none rounded-full p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 496 512"
                className="w-6 h-6  text-gray-500 hover:text-cyan-500"
              >
                <path
                  fill="currentColor"
                  d="M248 8C111 8 0 119 0 256S111 504 248 504 496 393 496 256 385 8 248 8zM363 176.7c-3.7 39.2-19.9 134.4-28.1 178.3-3.5 18.6-10.3 24.8-16.9 25.4-14.4 1.3-25.3-9.5-39.3-18.7-21.8-14.3-34.2-23.2-55.3-37.2-24.5-16.1-8.6-25 5.3-39.5 3.7-3.8 67.1-61.5 68.3-66.7 .2-.7 .3-3.1-1.2-4.4s-3.6-.8-5.1-.5q-3.3 .7-104.6 69.1-14.8 10.2-26.9 9.9c-8.9-.2-25.9-5-38.6-9.1-15.5-5-27.9-7.7-26.8-16.3q.8-6.7 18.5-13.7 108.4-47.2 144.6-62.3c68.9-28.6 83.2-33.6 92.5-33.8 2.1 0 6.6 .5 9.6 2.9a10.5 10.5 0 0 1 3.5 6.7A43.8 43.8 0 0 1 363 176.7z"
                />
              </svg>
            </button>

            {/* Phone Icon */}
            <button className="bg-none rounded-full p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="w-6 h-6 text-gray-500 hover:text-green-400"
              >
                <path
                  fill="currentColor"
                  d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"
                />
              </svg>
            </button>

            {/* Instagram Icon */}
            <button className="bg-none rounded-full p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="w-6 h-6  text-gray-500 hover:text-fuchsia-500 "
              >
                <path
                  fill="currentColor"
                  d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                />
              </svg>
            </button>

            {/* Email */}
            <button className="bg-none rounded-full p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="16"
                width="16"
                viewBox="0 0 512 512"
                className="w-6 h-6 text-gray-500 hover:text-fuchsia-400"
              >
                <path
                  fill="currentColor"
                  d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"
                />
              </svg>
              <Link href="mailto:esthete.cleaning@gmail.com"></Link>
            </button>
          </div>

          {/* This section will be displayed on smaller screens */}
          <div className="md:hidden lg:hidden">
            <button
              onClick={() => setShow(!show)}
              className="text-gray-500 hover:text-gray-700 focus:text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
            >
              <Image className="cursor-pointer w-8 sm:w-auto" src="/esthete.png" alt="logo" width={52} height={52} />
            </button>
            <ul className="flex text-3xl md:text-base items-center py-8 md:flex flex-col md:flex-row justify-center fixed md:relative top-0 bottom-0 left-0 right-0 bg-white md:bg-transparent  z-20">
              <li className="text-gray-600 text-lg hover:text-gray-800 cursor-pointer md:ml-10 pt-10 md:pt-0">
                <Link href="/">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4 text-gray-300"
                    viewBox="0 0 448 512"
                    fill="currentColor"
                  >
                    <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                  </svg>
                </Link>
              </li>
              <li className="text-gray-600 text-lg hover:text-gray-800 cursor-pointer md:ml-10 pt-10 md:pt-0">
                <Link href="/">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4 text-gray-300"
                    viewBox="0 0 448 512"
                    fill="currentColor"
                  >
                    <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                  </svg>
                </Link>
              </li>

              <li className="text-gray-600 text-lg hover:text-gray-800 cursor-pointer md:ml-10 pt-10 md:pt-0">
                <Link href="/">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4 text-gray-300"
                    viewBox="0 0 512 512"
                    fill="currentColor"
                  >
                    <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
                  </svg>
                </Link>
              </li>
              <li className="text-gray-600 text-lg hover:text-gray-800 cursor-pointer md:ml-10 pt-10 md:pt-0">
                <Link href="/">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4 text-gray-300"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                    />
                  </svg>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
