import { Carousel } from '@material-tailwind/react';
import Image from 'next/image';

export default function CarouselCustomNavigation() {
  return (
    <Carousel
      className="rounded-xl"
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill('').map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex === i ? 'w-8 bg-white' : 'w-4 bg-white/50'
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
    >
      <Image className="h-full w-full object-cover" src="/Images/work1.jpg" alt="logo" width={720} height={720} />
      <Image className="h-full w-full object-cover" src="/Images/work2.jpg" alt="logo" width={720} height={720} />

      <Image className="h-full w-full object-cover" src="/Images/work4.jpg" alt="logo" width={720} height={720} />
      <Image className="h-full w-full object-cover" src="/Images/work5.jpg" alt="logo" width={720} height={720} />
      <Image
        className="h-40 w-full object-cover sm:h-56 md:h-full"
        src="/Images/IMG_20231202_220058_234.jpg"
        alt="logo"
        width={720}
        height={720}
      />
      <Image
        className="h-40 w-full object-cover sm:h-56 md:h-full"
        src="/Images/IMG_20231202_220058_860.jpg"
        alt="logo"
        width={720}
        height={720}
      />
      <Image
        className="h-40 w-full object-cover sm:h-56 md:h-full"
        src="/Images/IMG_20231202_220105_699.jpg"
        alt="logo"
        width={720}
        height={720}
      />
    </Carousel>
  );
}
