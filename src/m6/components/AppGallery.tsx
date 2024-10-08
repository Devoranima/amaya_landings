import React from 'react';
import Header from '@components/Section/Header';
import { FaStar, FaStarHalfStroke } from 'react-icons/fa6';
import { BsFillPersonFill } from 'react-icons/bs';
import { Swiper, SwiperSlide } from 'swiper/react';
import Section from '@/components/Section/Section';

const AppGallery = () => {
  return (
    <Section className=''>
      <div className="container flex flex-col items-center text-main">
        <App />
      </div>

      <Header className="mt-10 text-slate-700">Наши активности</Header>

      <div className="pointer-events-none mt-10 max-w-full">
        <Slider index={1} />
        <div className="xl:hidden">
          <Slider index={6} offset={100} />
        </div>
      </div>

    </Section>
  );
};

const App = () => {
  return (
    <div className="">
      <div className="hidden lg:block">
        <App_Tablet />
      </div>
      <div className="lg:hidden">
        <App_Mobile />
      </div>
    </div>
  )
}

const App_Tablet = () => {
  return (
    <div className="flex items-stretch flex-row w-full text-main p-10 bg-white rounded-3xl">
      <div className="flex flex-col items-center max-w-[40%]">
        <img src="m6/index/shared/Icon.webp" className="" />
        <h2 className='text-3xl font-fut mt-4'>Детские игры
        </h2>
      </div>
      <div className="flex flex-col justify-around items-start text-start  ml-4"> 
        <h3 className='max-w-[90%] text-2xl'>
          Короткое описание приложения, о чём оно, для кого оно, чему научит и т.д.
        </h3>
        <div className="w-full justify-around flex flex-row items-start text-center text-2xl mt-2">
          <div className="flex flex-col items-center">
            <div className="flex flex-row items-center justify-center font-bold text-3xl">
              <FaStar className='text-yellow-500' />
              <div className="ml-2">4.8</div>
            </div>
            <span className=''>App Store raiting</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex flex-row items-center justify-center font-bold text-3xl">
              <BsFillPersonFill className='text-purple-500' />
              <div className="ml-2">100.000</div>
            </div>
            <span className=''>Monthly active users
            </span>
          </div>
        </div>
        <div className="mt-4 flex flex-row justify-between items-center">
          <div className="aspect-square w-16 bg-slate-500">
            QR Spacer
          </div>
          <a href="" className='block w-60 ml-8'>
            <img src="AppStore.webp" alt="" className='' />
          </a>
        </div>
      </div>
    </div>
  )
}

const App_Mobile = () => {
  return (
    <div className="flex flex-row items-stretch w-full text-main p-4 bg-white rounded-3xl">
      <div className="flex flex-col items-center max-w-[40%]">
        <img src="m6/index/shared/Icon.webp" className="" />
        <a href="block">
          <img src="AppStore.webp" alt="" className='mt-4' />
        </a>
      </div>
      <div className="flex flex-col justify-between ml-4 items-start text-start">
        <h2 className='text-2xl font-fut text-center'>Детские игры</h2>
        <h3 className=''>
          Короткое описание приложения, о чём оно, для кого оно, чему научит и т.д.
        </h3>

        <div className="flex flex-col items-start mt-2">
          <div className="flex flex-row items-center text-lg">
            {(new Array(4)).fill(0).map((_e)=>
              <FaStar className='text-yellow-500' />
            )}
            <FaStarHalfStroke className='text-yellow-500'/>
            <div className="ml-1 font-bold">4.8</div>
          </div>
          <div className=''>App Store raiting</div>
        </div>
        <div className="flex flex-col items-start mt-2">
          <div className="flex flex-row items-center text-lg">
            <BsFillPersonFill className='text-purple-500' />
            <div className="ml-1 font-bold">100.000</div>
          </div>
          <div className=''>Monthly active users</div>
        </div>

      </div>
    </div>
  )
}

export default AppGallery;

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

const Slider = ({ index, offset }: { index: number, offset?: number }) => {
  const items: React.ReactNode[] = [];

  for (let i = 1; i < 11; i++) {
    items.push(
      <SwiperSlide className="w-1/2 md:w-1/3 lg:w-1/4" key={`slide-${Math.random()}`}>
        <img
          src={`m6/index/shared/Icon${i}.webp`} alt=""
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
        640: { slidesPerView: getSlidesPerView('sm') },
        768: { slidesPerView: getSlidesPerView('md') },
        1024: { slidesPerView: getSlidesPerView('lg') },
        1280: { slidesPerView: getSlidesPerView('xl') },
        1536: { slidesPerView: getSlidesPerView('2xl') },
      }}
      slidesOffsetBefore={offset ?? 0}
      className="my-2 w-full"
      initialSlide={index}
    >
      {items}
    </Swiper>
  )
}