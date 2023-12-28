import Image from 'next/image';
import Head from 'next/head';
import Navbar from '@/components/navbar';
import FlipCard from '@/components/flip-card';
import Modal from '@/components/modal';
import Link from 'next/link';
import CarouselCustomNavigation from '@/components/card';

export default function Services() {
  const siteTitle = 'extra services';

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
      <div>
        <div className="mx-auto max-w-screen-2xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="bg-fuchsia-300 p-8 md:p-12 lg:px-16 lg:py-24">
              <div className="mx-auto max-w-xl text-center">
                <h2 className="text-lg font-bold text-gray-700 md:text-3xl">
                  Esthete Cleaning – Your Premier Cleaning Solution
                </h2>

                <p className="hidden text-gray-700/90 text-base sm:mt-4 sm:block">
                  Esthete Cleaning offers diverse cleaning services, including regular, deep, post-renovation, couch
                  steaming, and after-party cleanup, catering to individual needs. Our dedicated team guarantees
                  exceptional cleanliness, tailored to your specific requirements for a pristine environment.{' '}
                </p>

                <div className="mt-4 md:mt-8">
                  <Modal />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 md:grid-cols-1 lg:grid-cols-2">
              <Image
                className="h-40 w-full object-cover sm:h-56 md:h-full"
                src="/Images/IMG_20231212_204746_777.jpg"
                alt="logo"
                width={720}
                height={720}
              />
              <Image
                className="h-40 w-full object-cover sm:h-56 md:h-full"
                src="/Images/IMG_20231212_204746_905.jpg"
                alt="logo"
                width={720}
                height={720}
              />
            </div>
          </div>
        </div>
      </div>
      <hr />
      <section className="flex flex-wrap mx-2 overflow-x">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold text-gray-800 my-8 text-center ">Our Services</h1>
          <div className="">
            <FlipCard />
          </div>
          <div className="flex justify-center items-center mx-8">
            <Modal />
            <Link
              href="/extra-services"
              className="text-base bg-fuchsia-100 hover:bg-fuchsia-200 rounded-xl text-gray-700 hover:text-gray-200 mx-4 my-4 px-4 py-4"
            >
              Find out more...
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-center h-screen w-screen my-20 mx-20">
          <h2 className="text-3xl font-bold text-gray-800 my-8 text-center ">Extra Services</h2>
          <CarouselCustomNavigation />
        </div>
      </section>
    </>
  );
}
