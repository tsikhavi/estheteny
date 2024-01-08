import React, { useState } from 'react';
import Cta from '@/components/cta';
import Accordion from '@/components/faq';
import Head from 'next/head';
import MapCard from '@/components/MapCard';
import Link from 'next/head';
import Banner from '@/components/Banner';
import Reviews from '@/components/reviews';

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
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1" />
      </Head>

      <main className=" overflow-x-hidden min-w-[1] max-w-[1]">
        <section>
          <div className="relative top-40 -z-50 mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
            <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
              <h1 className="text-3xl font-extrabold sm:text-5xl">
              <strong className="block font-extrabold text-rose-700"> Esthete Cleaning </strong>
                Best Cleaning Services in New York.
                
              </h1>

              <p className="mt-4 max-w-lg sm:text-xl/relaxed">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus numquam ea!
              </p>

              <div className="mt-8 flex flex-wrap gap-4 text-center">
                <Link
                  href="#"
                  className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
                >
                  Get Started
                </Link>

                <Link
                  href="#"
                  className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </section>
        <Cta />
        <div className="px-4 sm:px-8 lg:px-16 xl:px-20">
          <h3 className="text-3xl mx-auto text-center text-allports-700 flex-auto my-12">F.A.Q.S</h3>

          <Accordion title="What are the payment arrangements?">
            <ul>
              <li className="py-1 ">
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
            <ul className="list-disc ml-8">
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
        <section className="pt-20">
          <Reviews />
        </section>
        <MapCard />
      </main>
    </>
  );
}
