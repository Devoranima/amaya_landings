import { Swiper, SwiperSlide } from 'swiper/react';
import CTA from './CTA';


const Reviews = () => {
  return (
    <div className="relative">

      <div className="mt-10 w-full">
        <Slider />
      </div>
      <CTA className='max-w-fit mx-auto mt-10'>Попробовать</CTA>
      <img src="m6/index/shared/kidsArt.webp" alt="" className='relative w-full z-20 mt-20' />
    </div>
  );
};

export default Reviews;


const getSlidesPerView = (breakpoint: string) => {
  switch (breakpoint) {
    case 'sm':
      return 2;
    case 'md':
      return 3;
    case 'lg':
      return 4;
    case 'xl':
      return 5;
    case '2xl':
      return 6;
    default:
      return 4; // Default to 4 if no breakpoint matches
  }
};

const Slider = ({ offset }: { offset?: number }) => {
  const items = [];

  for (let i = 1; i < 7; i++) {
    items.push(
      <SwiperSlide className="w-1/2 md:w-1/3 lg:w-1/4" key={`slide-${Math.random()}`}>
        <img
          src={`m6/index/shared/review.webp`} alt=""
          className="w-full"
        />
      </SwiperSlide>
    );
  }

  return (
    <Swiper
      spaceBetween={10}
      slidesPerView={2}
      autoplay={{
        delay: 1,
        disableOnInteraction: false,
        pauseOnMouseEnter: false,
        waitForTransition: true,
      }}
      speed={20000}
      loop
      breakpoints={{
        640: { slidesPerView: getSlidesPerView('sm'), spaceBetween: 20},
        768: { slidesPerView: getSlidesPerView('md'), speed: 50000},
        1024: { slidesPerView: getSlidesPerView('lg')},
        1280: { slidesPerView: getSlidesPerView('xl')},
      }}
      slidesOffsetBefore={offset ?? 0}
      className="my-2"
    >
      {items}
    </Swiper>
  )
}