import Layout from '@/components/layout/MainLayout';
import Image from 'next/image';
import Head from 'next/head';
import Navbar from '@/components/navbar';
import FlipCard from '@/components/flip-card';
import Modal from '@/components/modal';

export default function Services() {
  const siteTitle = 'extra services';
  const frontContent = 'hi';

  return (
    <Layout title={siteTitle}>
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
        <Navbar />

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
                  <a
                    href="#"
                    className="inline-block rounded border border-white bg-white px-12 py-3 text-sm font-medium text-fuchsia-500 transition hover:bg-transparent hover:text-gray-700 focus:outline-none focus:ring focus:ring-yellow-400"
                  >
                    Get Started Today
                  </a>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 md:grid-cols-1 lg:grid-cols-2">
              <Image
                className="h-40 w-full object-cover sm:h-56 md:h-full"
                src="/esthete.png"
                alt="logo"
                width={200}
                height={200}
              />
              <Image
                className="h-40 w-full object-cover sm:h-56 md:h-full"
                src="/esthete.png"
                alt="logo"
                width={200}
                height={200}
              />
            </div>
          </div>
        </div>
      </div>
      <hr />
      <section className="flex flex-wrap mx-2 overflow-x">
        <h4> Price Calculator</h4>
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold my-8">Our Services</h1>
          <div className="">
            <FlipCard />
          </div>
          <div className="flex justify-center items-center mx-8">
            <Modal />
          </div>
        </div>
      </section>
    </Layout>
  );
}
