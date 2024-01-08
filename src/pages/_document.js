import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en-US" className="h-full">
      <Head />
      <body
        className=" text-black text-base h-full w-full justify-center overflow-x-hidden 
      bg-gradient-to-bl from-allports-50 to-white "
      >
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
