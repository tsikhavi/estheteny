import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en-US" className="h-full">
      <Head />
      <body className=" bg-radial text-black text-base h-full w-full ">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
