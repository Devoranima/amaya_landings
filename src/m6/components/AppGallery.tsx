import React from 'react';
import Header from '@components/Section/Header';
import { FaStar } from 'react-icons/fa6';
import { BsFillPersonFill } from 'react-icons/bs';
import { Swiper, SwiperSlide } from 'swiper/react';

const AppGallery = () => {
  return (
    <div className=''>
      <div className="container flex flex-col items-center text-main">
        <App/>
      </div>

      <Header className="text-3xl md:text-5xl mt-10 text-slate-700">Наши активности</Header>

      <div className="pointer-events-none mt-10">
        <Slider index={1}/>
        <div className="xl:hidden">
          <Slider index={6} offset={100}/>
        </div>
      </div>

    </div>
  );
};

const App = () => {
  return (
    <div className="flex w-full text-main p-4 md:p-10 lg:p-20 items-center flex-row bg-white rounded-[3rem]">
      <div className="flex flex-col items-center">
        <img src="m6/index/shared/Icon.webp" className="" />
        <h2 className='text-2xl sm:text-4xl lg:text-5xl font-fut mt-4 text-center'>Детские игры
        </h2>
      </div>
      <div className="flex flex-col px-2 sm:px-4 lg:pl-20 items-start text-start">
        <h3 className='sm:text-2xl lg:text-4xl w-full'>
          Короткое описание приложения, о чём оно, для кого оно, чему научит и т.д.
        </h3>
        <div className="w-full justify-around flex flex-row items-start text-center sm:text-2xl md:text-3xl mt-4 md:mt-10">
          <div className="flex flex-col items-center">
            <div className="flex flex-row items-center justify-center font-bold">
              <FaStar className='text-yellow-500' />
              4.8
            </div>
            <span className='sm:text-xl lg:text-2xl'>App Store raiting</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex flex-row items-center justify-center font-bold">
              <BsFillPersonFill className='text-purple-500' />
              100.000
            </div>
            <span className='sm:text-xl lg:text-2xl'>Monthly active users
            </span>
          </div>
        </div>
        <div className="mt-10 flex flex-row justify-start items-center w-full">
            {/*<div className="aspect-square w-1/2 lg:w-[10%] bg-slate-500"></div>*/}
            <a href="block">
              <img src="AppStore.webp" alt="" className=''/>
            </a>
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

const Slider = ({ index, offset }: {index:number, offset?: number }) => {
  const items:React.ReactNode[] = [];

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
      className="my-2"
      initialSlide={index}
    >
      {items}
    </Swiper>
  )
}