import Image from 'next/image';
import ProductMenuModal from './modal';
export default function Cta() {
  return (
    <div className="bg-inherit  overflow-hidden relative lg:flex lg:items-center">
      <div className="w-full py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
        <h2 className="text-3xl font-extrabold text-black  sm:text-4xl">
          <span className="block">What Makes Us Different?</span>
        </h2>
        <p className="text-base mt-4 text-gray-400">Best cleaning in New York: Manhattan, Brooklyn & Queens!</p>
        <div class="p-6">
          <ul class="list-disc list-inside space-y-2">
            <li class="flex items-center">
              <span class="mr-2">&#10004;</span>
              Exceptional Service: Our team is comprised of meticulous professionals dedicated to exceeding your
              expectations.
            </li>
            <li class="flex items-center">
              <span class="mr-2">&#10004;</span>
              Customized Cleaning Plans: Tailored to your specific needs, ensuring every corner of your home shines.
            </li>
            <li class="flex items-center">
              <span class="mr-2">&#10004;</span>
              Eco-Friendly Practices: We care for your home and the environment, using eco-conscious products and
              methods.
            </li>
            <li class="flex items-center">
              <span class="mr-2">&#10004;</span>
              Reliability: Count on us to be punctual and reliable, respecting your schedule and privacy.
            </li>
          </ul>
        </div>

        <div className="lg:mt-0 lg:flex-shrink-0">
          <div className="mt-12 mx-12 inline-flex rounded-md shadow">
            <ProductMenuModal />
          </div>
        </div>
      </div>
      <div className="flex items-center gap-8 p-8 lg:p-24">
        <Image
          src="/Images/jeshoots-com-__ZMnefoI3k-unsplash.jpg"
          className="w-1/2 rounded-lg"
          alt="Tree"
          width={500}
          height={500}
        />
        <div>
          <Image
            src="/Images/towfiqu-barbhuiya-ho-p7qLBewk-unsplash.jpg"
            className="mb-8 rounded-lg"
            alt="Tree"
            width={500}
            height={500}
          />
          <Image src="/Images/nino-maghradze.jpg" className="rounded-lg" alt="Tree" width={500} height={500} />
        </div>
      </div>
    </div>
  );
}
