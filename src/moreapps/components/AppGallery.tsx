import Header from '@components/Section/Header';
import classNames from 'classnames';
import CTA from './CTA';
import { FaStar } from 'react-icons/fa6';
import { BsFillPersonFill } from 'react-icons/bs';
import { Swiper, SwiperSlide } from 'swiper/react';
import React from 'react';
import Section from '@/components/Section/Section';

type T_App = {
  image: {
    mobile: string;
    tablet: string;
  };
  title: string | JSX.Element;
  subtitle: string | JSX.Element;
  rating: number;
  users: number;
  callback?: () => {}
}

const app: T_App =
{
  image: {
    mobile: "amaya/index/mobile/Alphabet.webp",
    tablet: "amaya/index/tablet/Alphabet.webp"
  },
  title: <span>Весёлый Алфавит. <br /> Учим буквы весело! </span>,
  subtitle: "Учим алфавит и учимся читать по слогам. Развивающие игры для детей: учим буквы, читаем слоги и слова, расширяем словарный запас. Играем с пользой!",
  rating: 4.8,
  users: 100000
}

const apps: T_App[] = [app,
  {
    title: <span>Весёлая Ферма: <br /> Учись и Играй!</span>,
    subtitle: "В приложении 6 различных категорий: более 90 видов животных, насекомых, овощей и фруктов. Малыш познакомится с окружающим миром и выучит много новых слов!",
    rating: 4.8,
    users: 100000,
    image: {
      mobile: "amaya/index/mobile/Farm.webp",
      tablet: "amaya/index/tablet/Farm.webp"
    },
  },
  {
    title: <span>Мир Динозавров: <br /> Играй и Учись!</span>,
    subtitle: <div>Веселые динозавры ждут любопытного малыша в гости! Отправляйся в новое увлекательное путешествие в мир динозавров вместе с другом - Енотиком!
      <div className="hidden lg:block">Играй, веселись и изучай особенности этих необычных существ! Собирай дино-пазлы и стань обладателем своего уникального парка динозавров!</div></div>,
    rating: 4.8,
    users: 100000,
    image: {
      mobile: "amaya/index/mobile/Dino_Island.webp",
      tablet: "amaya/index/tablet/Dino_Island.webp"
    },
  }
]

const AppGallery = () => {
  return (
    <Section className="">
      <Header className="mt-20">Выбирайте индивидуальный подход к интересам детей по разным предметам</Header>
      <div className='container flex flex-col items-center text-main mt-10'>
        {apps.map((e, index) => <App index={index} app={e} />)}
      </div>

      <Header className="mt-10">Все приложения Amaya+</Header>      
      <div className="pointer-events-none max-w-full mt-4">
        <Slider />
        <div className="xl:hidden">
          <Slider offset={100}/>
        </div>
        <div className="2xl:hidden">
          <Slider />
        </div>
      </div>

      <CTA className='max-w-fit mx-auto mt-10'>Попробовать</CTA> 
    </Section>
  );
};

const App = ({ index, app }: { index: number, app: T_App }) => {
  const left = index % 2 == 0;
  return (
    <div className={classNames("flex w-full text-main items-center p-4 lg:p-10 mt-10", left ? "flex-row" : "flex-row-reverse")}>
      <img src={app.image.mobile} className="lg:hidden max-w-[30%]"></img>
      <img src={app.image.tablet} className="hidden lg:block max-w-[40%]"></img>

      <div className={classNames("flex flex-col justify-around lg:text-center lg:items-center", left ? "items-start text-start ml-4" : "items-end text-end mr-4")}>
        <h2 className='text-2xl lg:text-3xl font-fut'>{app.title}</h2>
        <h3 className='lg:text-2xl max-w-[90%]'>
          {app.subtitle}
        </h3>
        <div className="w-full justify-around flex flex-row items-start text-center text-sm lg:text-2xl mt-2">
          <div className="flex flex-col items-center">
            <div className="flex flex-row items-center justify-center font-bold text-xl">
              <FaStar className='text-yellow-500' />
              {app.rating}
            </div>
            <span className=''>App Store raiting</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex flex-row items-center justify-center font-bold text-xl">
              <BsFillPersonFill className='text-purple-500' /> {app.users}
            </div>
            <span className=''>Monthly active users
            </span>
          </div>
        </div>
        <CTA customPaddingX className='mt-4 lg:mt-10 px-14 text-xl lg:text-2xl'>Попробовать</CTA>
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

const Slider = ({ offset }: { offset?: number }) => {
  const items:React.ReactNode[] = [];

  for (let i = 1; i < 10; i++) {
    items.push(
      <SwiperSlide className="w-1/2 md:w-1/3 lg:w-1/4" key={`slide-${Math.random()}`}>
        <img
          src={`amaya/index/shared/GameGallerySpacer.webp`} alt=""
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
    >
      {items}
    </Swiper>
  )
}