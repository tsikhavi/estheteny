import Image from 'next/image';
import Head from 'next/head';
import Navbar from '@/components/navbar';
import FlipCard from '@/components/flip-card';
import Modal from '@/components/modal';
import Link from 'next/link';
import CarouselCustomNavigation from '@/components/card';
import Accordion from '@/components/faq';
import ServicesAccordion from '@/components/ServicesAccordion';
import CheckoutPage from '@/components/Checkout/CheckoutPage';
import Reviews from '@/components/reviews';

export default function Services() {
  const siteTitle = 'Services';

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
      <Section />
    </>
  );
}

function Section() {
  return (
    <>
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="mx-2 my-20 ">
              <div className=" px-2 mr-2 ">
                <ServicesAccordion
                  title="Regular Cleaning Services"
                  content="Below is a Description List of the Regular Cleaning Services we offer and their Cost"
                />
                <ServicesAccordion
                  title="Deep Cleaning Services"
                  content="Below is a Description List of the Deep Cleaning Services we offer and their Cost"
                />
                <ServicesAccordion
                  title="Post Renovation Cleaning"
                  content="Below is a Description List of the Post Renovation Cleaning Services we offer and their Cost"
                />
                <ServicesAccordion
                  title="After Party Cleanup"
                  content="Below is a Description List of the After Party Cleanup Services we offer and their Cost"
                />
              </div>
              <hr className="bg-allports-300 h-px border-0 rounded" />
            </div>
            <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full"></div>

            <div className="lg:py-24">
              <h2 className="text-3xl font-bold sm:text-4xl">Esthete Cleaning Services</h2>

              <p className="mt-4 text-gray-600">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut qui hic atque tenetur quis eius quos ea
                neque sunt, accusantium soluta minus veniam tempora deserunt? Molestiae eius quidem quam repellat.
              </p>

              <Link
                href="#"
                className="mt-8 inline-block rounded bg-allports-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-allports-700 focus:outline-none focus:ring focus:ring-yellow-400"
              >
                Get Started Today
              </Link>
              <section className="pt-20">
                <Carousel />
              </section>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-20">
        
      </section>

      <section className="pt-20">
        <Reviews />
      </section>
    </>
  );
}
function Carousel() {
  return (
    <div class="group relative m-10 h-96 w-96 overflow-hidden rounded-lg shadow-md">
      <div class="absolute left-0 top-0 h-full w-full transition-all duration-300 ease-in-out group-hover:-top-96">
        <Image
          class="h-4/6 w-full object-cover"
          src="/Images/unsplash4.jpg"
          alt=""
          width={720}
          height={720}
        />
        <h1 class="mt-4 px-4 text-center font-serif text-xl font-semibold text-rose-500">
          Esthete Cleaning
        </h1>
        <p class="mt-1 px-4 text-center text-gray-600">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam, saepe.
        </p>
      </div>

      <div class="absolute left-0 -bottom-96 flex h-full w-full flex-col justify-center transition-all duration-300 ease-in-out group-hover:bottom-0">
        <h1 class="mb-2 px-8 text-center font-serif text-xl font-semibold text-rose-500">
          Esthete Cleaning
        </h1>
        <p class="px-8 text-center">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero deserunt quisquam aperiam, voluptas esse
          minima. Tenetur odit rem ducimus incidunt quas, voluptates obcaecati, sint amet sit provident quis nam
          repellat, odio repellendus recusandae. Error, repudiandae?
        </p>
      </div>
    </div>
  );
}
