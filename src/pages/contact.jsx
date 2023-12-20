import ContactUs from '@/components/contact-us';
import Head from 'next/head';
import Layout from '@/components/layout/MainLayout';
import Link from 'next/link';
import Navbar from '@/components/navbar';

export default function Contact() {
  const siteTitle = 'contact us';
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

      <main className="bg-inherit w-full h-full">
        <Navbar />
        <section className="bg-gray-50">
          <h1 className="text-3xl font-bold text-fuchsia-700 text-center my-8 "> Contact Esthete Cleaning</h1>

          <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
              <div className="lg:col-span-2 lg:py-12">
                <p className="max-w-xl text-sm">
                  Contact <strong>Esthete Cleaning</strong> for <em>Superior Cleaning Services</em>. <br /> We
                  prioritize excellence in cleaning services tailored to meet your specific needs. Whether it&apos;s
                  residential, commercial, or specialized cleaning requirements, our dedicated team is here to assist
                  you. Get in touch with us today to schedule an appointment or request a quote. Our customer support
                  representatives are available to address your inquiries and discuss how we can customize our services
                  to accommodate your preferences.
                  <br /> You can reach us via phone at{' '}
                  <Link href="" className="text-sm font-bold text-fuchsia-600">
                    {' '}
                    +1 (646)578-0645{' '}
                  </Link>{' '}
                  or drop us an email at <code className="bg-fuchsia-400">esthete.cleaning@gmail.com</code>{' '}
                  Alternatively, fill out the contact form below, and we&apos;ll promptly get back to you. Experience
                  the pristine cleanliness and professionalism that defines Esthete Cleaning. Contact us now!&quot;.
                </p>

                <div className="mt-8">
                  <address className="mt-2 not-italic bg-fuchsia-100 text-gray-900">
                    <span className="inline-flex mx-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4 text-red-500"
                        height="16"
                        width="12"
                        viewBox="0 0 384 512"
                      >
                        <path
                          fill="currentColor"
                          d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"
                        />
                      </svg>
                    </span>
                    Manhattan, NY 10036, United States
                  </address>
                </div>
              </div>

              <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
                <form action="" className="space-y-4">
                  <div>
                    <label className="sr-only" htmlFor="name">
                      Name
                    </label>
                    <input
                      className="w-full rounded-lg border-gray-200 p-3 text-sm"
                      placeholder="Name"
                      type="text"
                      id="name"
                    />
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label className="sr-only" htmlFor="email">
                        Email
                      </label>
                      <input
                        className="w-full rounded-lg border-gray-200 p-3 text-sm"
                        placeholder="Email address"
                        type="email"
                        id="email"
                      />
                    </div>

                    <div>
                      <label className="sr-only" htmlFor="phone">
                        Phone
                      </label>
                      <input
                        className="w-full rounded-lg border-gray-200 p-3 text-sm"
                        placeholder="Phone Number"
                        type="tel"
                        id="phone"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-4 text-center sm:grid-cols-4 text-sm">
                    <div>
                      <input className="peer sr-only" id="option1" type="radio" tabIndex="-1" name="option" />

                      <label
                        htmlFor="option1"
                        className="block w-full rounded-lg border border-gray-200 p-3 text-gray-600 hover:border-black peer-checked:border-black peer-checked:bg-black peer-checked:text-white"
                        tabIndex="0"
                      >
                        <span className="text-sm"> Regular </span>
                      </label>
                    </div>

                    <div>
                      <input className="peer sr-only" id="option2" type="radio" tabIndex="-1" name="option" />

                      <label
                        htmlFor="option2"
                        className="block w-full rounded-lg border border-gray-200 p-3 text-gray-600 hover:border-black peer-checked:border-black peer-checked:bg-black peer-checked:text-white"
                        tabIndex="0"
                      >
                        <span className="text-sm"> Deep </span>
                      </label>
                    </div>

                    <div>
                      <input className="peer sr-only" id="option3" type="radio" tabIndex="-1" name="option" />

                      <label
                        htmlFor="option3"
                        className="block w-full rounded-lg border border-gray-200 p-3 text-gray-600 hover:border-black peer-checked:border-black peer-checked:bg-black peer-checked:text-white"
                        tabIndex="0"
                      >
                        <span className="text-sm"> Post Renovation </span>
                      </label>
                    </div>

                    <div>
                      <input className="peer sr-only" id="option4" type="radio" tabIndex="-1" name="option" />

                      <label
                        htmlFor="option4"
                        className="block w-full rounded-lg border border-gray-200 p-3 text-gray-600 hover:border-black peer-checked:border-black peer-checked:bg-black peer-checked:text-white"
                        tabIndex="0"
                      >
                        <span className="text-sm"> After Party </span>
                      </label>
                    </div>
                  </div>

                  <div>
                    <label className="sr-only" htmlFor="message">
                      Message
                    </label>

                    <textarea
                      className="w-full rounded-lg border-gray-200 p-3 text-sm"
                      placeholder="Message"
                      rows="8"
                      id="message"
                    ></textarea>
                  </div>

                  <div className="mt-4">
                    <button
                      type="submit"
                      className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
                    >
                      Send Enquiry
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
