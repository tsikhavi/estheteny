import React, { useState } from 'react';
import Cta from '@/components/cta';
import Accordion from '@/components/faq';
import Head from 'next/head';
import MyMenu from '@/components/menu';
import Navbar from '@/components/navbar';
import MapCard from '@/components/MapCard';
import ProductMenuModal from '@/components/modal';

export default function Landing() {
  const [show, setShow] = useState(false);
  const siteTitle = 'Home';
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Esthete Cleaning - Landing" />
        <title>{siteTitle}</title>
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <main className="py-12  overflow-y-hidden">
        <div className="w-full px-6 bg-[url('/Images/work10.jpg')] ">
          <div className="mt-8 relative rounded-lg bg-transparent container mx-auto flex flex-col items-center pt-8 lg:pt-16 pb-16 sm:pb-24 md:pb-32 lg:pb-40 xl:pb-48">
            <div className="w-full sm:w-2/3 mb-5 sm:mb-10 backdrop-blur-sm bg-fuchsia-100/30">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center text-fuchsia-700 font-bold leading-tight">
                Esthete cleaning in NY, Manhattan, Brooklyn, Queens!{' '}
              </h1>
              <p className="text-base text-center text-fuchsia-600 py-4 backdrop-blur-sm bg-fuchsia-100/30">
                <em>Book your cleaning in a few clicks. Free up time for life.</em>
              </p>
            </div>
            <div className="flex justify-center items-center mb-5 sm:mb-10  lg:mb-20">
              <ProductMenuModal />
              <button
                className="hover:text-gray-200 lg:text-xl hover:border-fuchsia-600 ml-3 sm:ml-6 
                bg-transparent transition duration-150 ease-in-out focus:outline-none 
                focus:ring-2 focus:ring-offset-2 ring-offset-fuchsia-700 focus:ring-white 
                hover:bg-fuchsia-800 rounded border border-fuchsia-700 text-fuchsia-700 
                px-4 sm:px-8 py-1 sm:py-3 text-sm"
              >
                Offers
              </button>
            </div>
          </div>
        </div>

        <Cta />
        <div className="px-4 sm:px-8 lg:px-16 xl:px-20">
          <h3 className="text-3xl text-center text-fuchsia-700 inline-flex">F.A.Q.S</h3>

          <Accordion title="What are the payment arrangements?">
            <ul>
              <li className="py-1">
                Secure your booking with a 50% pre-payment, with the remaining balance payable upon completion of
                services.
              </li>
            </ul>
          </Accordion>
          <Accordion title="What is the Satisfaction Guaranteed?">
            <div>
              <p>
                We prioritize customer satisfaction! Should you feel dissatisfied for any reason, kindly inform us
                within 48 hours of your cleaning appointment. We&apos;ll promptly dispatch another service professional
                at zero additional cost.
              </p>
            </div>
          </Accordion>
          <Accordion title="How soon can you arrive?">
            <div>
              <p>
                At times, our cleaning service providers may arrive within 3-4 hours, but we suggest booking your
                cleaning appointment at least 3 days in advance for the best experience!
              </p>
            </div>
          </Accordion>
          <Accordion title="Do I need to be at home during cleaning?">
            <div>
              <p>
                No worries, there&apos;s no need for you to be home during our service. We&apos;ll chat about the
                arrangements to ensure our cleaning providers can access your place.
              </p>
            </div>
          </Accordion>
          <Accordion title="What is your cancellation policy?">
            <div>
              <p>Please notify us no later than 24 hours before your appointment start time to avoid a fee.</p>
            </div>
          </Accordion>
          <Accordion title="How many cleaning service providers will you send?">
            <div>
              <p>
                Normally, we assign one service provider for apartment cleaning tasks. However, for more intensive jobs,
                the crew size will be decided based on the specific requirements of the task.
              </p>
            </div>
          </Accordion>
          <Accordion title="What is your pet policy?">
            <div>
              <p>
                We absolutely love pets and strive to create a pet-friendly cleaning experience! Yet, ensuring our
                staff&apos;s safety is crucial. If, unfortunately, your pet exhibits aggressive behavior, we may need to
                decline services and apply a cancellation fee.
              </p>
            </div>
          </Accordion>
          <Accordion title="How far in advance should I schedule an appointment?">
            <div>
              <p>
                For the best scheduling, we suggest booking your appointment three days in advance. However, we also
                offer same-day appointments in certain cases for your convenience!
              </p>
            </div>
          </Accordion>
          <Accordion title="What cleaning services are excluded from your cleaner's offerings?">
            <p> </p>
            <ul>
              <li className="py-1">Cleaning walls and ceilings</li>
              <li className="py-1">Exterior window cleaning</li>
              <li className="py-1">Moving furniture or objects over 35 pounds</li>
              <li className="py-1">Wiping TV screens or computer equipment</li>
              <li className="py-1">Reaching inaccessible heights without proper equipment</li>
              <li className="py-1">Meal preparation</li>
              <li className="py-1">Providing services related to children.</li>
            </ul>
          </Accordion>
        </div>
        <MapCard />
      </main>
    </>
  );
}
