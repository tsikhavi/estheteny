import Head from 'next/head';
import Footer from '@/components/footer';
import MyMenu from '@/components/menu';

export default function Layout({ children }) {
  const siteTitle = 'About Us Page';
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Esthete Cleaning New York" />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <div className="mx-0 px-10 bg-white">{children}</div>;
      <Footer />
    </>
  );
}
