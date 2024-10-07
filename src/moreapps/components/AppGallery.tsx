import Header from '@components/Section/Header';
import classNames from 'classnames';
import CTA from './CTA';
import { FaStar } from 'react-icons/fa6';
import { BsFillPersonFill } from 'react-icons/bs';
import { Swiper, SwiperSlide } from 'swiper/react';
import React from 'react';

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
    subtitle: <span>Веселые динозавры ждут любопытного малыша в гости! Отправляйся в новое увлекательное путешествие в мир динозавров вместе с другом - Енотиком! <br /> Играй, веселись и изучай особенности этих необычных существ! Собирай дино-пазлы и стань обладателем своего уникального парка динозавров!</span>,
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
    <div className="">
      <div className='container flex flex-col items-center text-main mb-10'>
        <Header className="text-4xl md:text-6xl mb-16 mt-20">Выбирайте индивидуальный подход к интересам детей по разным предметам</Header>
        {apps.map((e, index) => <App index={index} app={e} />)}

        <Header className="text-3xl md:text-5xl mt-10">Все приложения Amaya+</Header>
      </div>
      
      <div className="pointer-events-none">
        <Slider />
        <div className="xl:hidden">
          <Slider offset={100}/>
        </div>
        <div className="2xl:hidden">
          <Slider />
        </div>
      </div>

      <CTA className='max-w-fit mx-auto mt-10'>Попробовать</CTA>
    </div>
  );
};

const App = ({ index, app }: { index: number, app: T_App }) => {
  const left = index % 2 == 0;
  return (
    <div className={classNames("flex w-full text-main sm:p-4 mb-10 items-center", left ? "flex-row" : "flex-row-reverse")}>
      <img src={app.image.mobile} className="w-2/5 lg:hidden"></img>
      <img src={app.image.tablet} className="hidden w-1/2 lg:block p-4"></img>
      <div className={classNames("flex flex-col px-2 sm:px-4 items-center lg:text-center", left ? "items-start text-start" : "items-end text-end")}>
        <h2 className='w-full text-2xl sm:text-4xl lg:text-5xl lg:mb-4 font-fut'>{app.title}</h2>
        <h3 className='mt-4 sm:text-2xl lg:text-3xl w-full'>
          {app.subtitle}
        </h3>
        <div className="w-full justify-around flex flex-row items-start text-center sm:text-2xl md:text-3xl mt-4 md:mt-10">
          <div className="flex flex-col items-center">
            <div className="flex flex-row items-center justify-center font-bold">
              <FaStar className='text-yellow-500' />
              {app.rating}
            </div>
            <span className='sm:text-xl lg:text-2xl'>App Store raiting</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex flex-row items-center justify-center font-bold">
              <BsFillPersonFill className='text-purple-500' /> {app.users}
            </div>
            <span className='sm:text-xl lg:text-2xl'>Monthly active users
            </span>
          </div>
        </div>
        <CTA className='mt-4 md:mt-10 px-10 text-xl md:text-4xl'>Скачать</CTA>
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
      className="my-2"
    >
      {items}
    </Swiper>
  )
}