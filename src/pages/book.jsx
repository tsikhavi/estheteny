import Image from 'next/image'
import Layout from '@/components/layout/MainLayout';
import Link from 'next/link';
import Navbar from '@/components/navbar';

export default function Book() {
  return (
 

<Layout>
<Navbar />
<div class="relative overflow-hidden">
  <div class="bg-white pt-10 pb-14 sm:pt-16 lg:overflow-hidden lg:pt-24 lg:pb-24">
    <div class="mx-auto max-w-5xl lg:px-8">
      <div class="lg:grid lg:grid-cols-2 lg:gap-8">
        <div class="mx-auto max-w-md px-4 text-center sm:max-w-2xl sm:px-6 lg:flex lg:items-center lg:px-0 lg:text-left">
          <div class="lg:py-24">
            <h1 class="mt-4 text-4xl font-bold tracking-tight text-black sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl"><span class="block text-pink-500">Introducing </span><span class="block text-black">Booking Page</span></h1>
            <p class="mt-3 mb-8 text-base text-gray-400 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">Our Booking Page will launch soon. </p>
            <Link href="/landing" className="bg-fuchsia-600 hover:bg-fuchsia-500 text-gray-100 px-4 py-2 my-4 ">Go to the Landing Page</Link>
            
          </div>
        </div>
        <div class="mt-12 hidden lg:block">
        <Image src="/hutomo-abrianto.jpg" alt="Landing" width={1000} height={1000} />
        </div>
      </div>
    </div>
  </div>
</div>
</Layout>
  );
}
