import Navbar from '@/components/navbar';
import Layout from '@/layout/MainLayout';
import Head from 'next/head';
import Image from 'next/image';
import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid';
import Link from 'next/link';

export default function About() {
  const siteTitle = 'about us';
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
        <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <svg
              className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="e813992c-7d03-4cc4-a2bd-151760b470a0"
                  width={200}
                  height={200}
                  x="50%"
                  y={-1}
                  patternUnits="userSpaceOnUse"
                >
                  <path d="M100 200V.5M.5 .5H200" fill="none" />
                </pattern>
              </defs>
              <svg x="50%" y={-1} className="overflow-visible fill-fuchsia-100">
                <path
                  d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                  strokeWidth={0}
                />
              </svg>
              <rect width="100%" height="100%" strokeWidth={0} fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" />
            </svg>
          </div>
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
            <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
              <div className="lg:pr-4">
                <div className="lg:max-w-lg">
                  <p className="text-base font-semibold leading-7 text-indigo-600">Welcome to Esthete Cleaning </p>
                  <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    - Your Trusted Partner for Immaculate Spaces
                  </h1>
                  <p className="mt-6 text-xl leading-8 text-gray-700">
                    At Esthete Cleaning, we&apos;re more than just a cleaning service provider – we&apos;re dedicated to
                    transforming spaces into pristine sanctuaries. With years of expertise in the cleaning industry, we
                    take pride in our commitment to delivering unparalleled cleanliness and customer satisfaction.
                    <Link href="" className="text-sm font-bold text-fuchsia-600">
                      {' '}
                      Get in touch with us{' '}
                    </Link>{' '}
                    today to schedule an appointment or
                    <Link href="" className="text-sm font-bold text-fuchsia-600">
                      {' '}
                      request a quote.{' '}
                    </Link>{' '}
                  </p>
                </div>
              </div>
            </div>
            <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
              <Image className="cursor-pointer w-8 sm:w-auto" src="/jeshoots-com-__ZMnefoI3k-unsplash.jpg" alt="logo" width={500} height={500} />
            </div>
            <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
              <div className="lg:pr-4">
                <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
                  <h2 className="my-8 text-xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Story</h2>
                  <p>
                    Esthete Cleaning NYC was founded on the principle that a clean environment contributes to a
                    healthier and happier lifestyle. What sets us apart is our unwavering dedication to excellence,
                    attention to detail, and our passion for delivering superior cleaning solutions.
                  </p>
                  <ul role="list" className="mt-8 space-y-8 text-gray-600">
                    <li className="flex gap-x-3">
                      <CloudArrowUpIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                      <span>
                        <strong className="font-semibold text-gray-900">Uncompromising Quality:</strong> We adhere to
                        the highest standards of cleanliness, leaving no stone unturned in ensuring your space is
                        spotless.
                      </span>
                    </li>
                    <li className="flex gap-x-3">
                      <LockClosedIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                      <span>
                        <strong className="font-semibold text-gray-900">Personalized Approach: </strong> We understand
                        that every space is different. That&apos;s why we customize our services to fit your specific
                        requirements.
                      </span>
                    </li>
                    <li className="flex gap-x-3">
                      <ServerIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                      <span>
                        <strong className="font-semibold text-gray-900">Trustworthiness: </strong> As an independent
                        entity, we offer unbiased recommendations, ensuring you receive the best cleaning solutions
                        without any manufacturer influence.
                      </span>
                    </li>
                  </ul>
                  <p className="mt-8">
                    Ready to experience the Esthete Cleaning difference?{' '}
                    <Link href="" className="text-sm font-bold text-fuchsia-600">
                      {' '}
                      Get in touch with us{' '}
                    </Link>{' '}
                    today to schedule a cleaning service or to learn more about how we can elevate your space&apos;s
                    cleanliness.
                  </p>
                  <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Mission:</h2>
                  <p className="mt-6">
                    At Esthete Cleaning, our mission is simple - to exceed your expectations by providing top-notch
                    cleaning services that enhance your living and working environments. We prioritize your
                    satisfaction, aiming not just to clean but to create inviting spaces you&apos;ll love to spend time
                    in.
                  </p>
                  <blockquote>Esthete Cleaning - Where Cleanliness Meets Perfection.</blockquote>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
