import Section from '@components/Section/Section';
import Header from '@components/Section/Header';
import Body from '@components/Section/Body';
import BgFigure from './BgFigure';
import { Swiper, SwiperSlide } from 'swiper/react';
import React from 'react';

const Reviews = () => {
  return (
    <div className="relative">
      <Section className="pt-10 z-10">
        <Body className='z-10'>
          <Header className='text-white mt-20'>Более 3 000 000 счастливых родителей по всему миру</Header>
        </Body>
      </Section>

      <div className="mt-10 w-full">
        <Slider />
      </div>

      <BgFigure />
      <img src="amaya/index/shared/kids.webp" alt="" className='relative w-full z-20 0' />
    </div>
  );
};

export default Reviews;

//type T_Review = {
//  image: string;
//  text: string;
//  name: string;
//  rating: number;
//}

//const review: T_Review = {
//  image: "apps/mobile/Dino.webp",
//  text: "Это лучшая игра! Дочке два года, она в восторге. Купили весь сборник. Оказалось еще и полезно, она узнала много нового!",
//  name: "CandyCandy",
//  rating: 5
//}

//const Review = ({review}:{review: T_Review}) => {

//  return (
//    <div className="bg-white rounded-2xl p-1 flex flex-row items-center lg:w-2/3">
//      <img src={review.image} alt="" className='w-1/3'/>
//      <div className="w-full flex flex-col p-4">
//        <div className="w-full flex flex-row justify-between items-center">
//          <RiDoubleQuotesL className='text-6xl text-[#f47e12]'/>
//          <div className="flex flex-row items-center">
//            {[...Array(review.rating)].map((_, index)=>
//            <FaStar key={index} className='text-yellow-500 text-3xl'/>)}
//          </div>
//        </div>
//        <div className="text-xl font-sans font-semibold">
//          {review.text}
//        </div>
//        <div className="text-right text-2xl">
//          {review.name}
//        </div>
//      </div>
//    </div>
//  )
//}

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
          src={`amaya/index/shared/Reviews/${i % 3 + 1}.webp`} alt=""
          className="w-full"
        />
      </SwiperSlide>
    );
  }

  return (
    <Swiper
      spaceBetween={10}
      slidesPerView={1}
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