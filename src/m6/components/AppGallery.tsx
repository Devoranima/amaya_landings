import React from 'react';
import Header from '@components/Section/Header';
import classNames from 'classnames';
import CTA from './CTA';
import { FaStar } from 'react-icons/fa6';
import { BsFillPersonFill } from 'react-icons/bs';


type T_App = {
  image:{
    mobile: string;
    laptop: string;
  };
  title: string | JSX.Element;
  subtitle: string | JSX.Element;
  rating: number;
  users: number;
  callback?: ()=>{}
} 

const app:T_App = 
{
  image: {
    mobile: "apps/mobile/Alphabet.webp",
    laptop: "apps/laptop/Alphabet.webp"
  },
  title: <span>Весёлый Алфавит. <br /> Учим буквы весело! </span>,
  subtitle: "Учим алфавит и учимся читать по слогам. Развивающие игры для детей: учим буквы, читаем слоги и слова, расширяем словарный запас. Играем с пользой!",
  rating: 4.8,
  users: 100000
}

const apps: T_App[] = [app, 
  {title: <span>Весёлая Ферма: <br /> Учись и Играй!</span>,
    subtitle: "В приложении 6 различных категорий: более 90 видов животных, насекомых, овощей и фруктов. Малыш познакомится с окружающим миром и выучит много новых слов!",
    rating: 4.8,
    users: 100000,
    image: {
      mobile: "apps/mobile/Farm.webp",
      laptop: "apps/laptop/Farm.webp"
    },
  }, 
  {title: <span>Мир Динозавров: <br /> Играй и Учись!</span>,
    subtitle: <span>Веселые динозавры ждут любопытного малыша в гости! Отправляйся в новое увлекательное путешествие в мир динозавров вместе с другом - Енотиком! <br /> Играй, веселись и изучай особенности этих необычных существ! Собирай дино-пазлы и стань обладателем своего уникального парка динозавров!</span>,
    rating: 4.8,
    users: 100000,
    image: {
      mobile: "apps/mobile/Dino.webp",
      laptop: "apps/laptop/Dino.webp"
    },
  }
]

const AppGallery = () => {
  return (
    <div className='container flex flex-col items-center text-main mb-20'>
      <Header>Выбирайте индивидуальный подход к интересам детей по разным предметам</Header>
      {apps.map((e, index)=><App index={index} app={e} />)}

      <Header>Все приложения Amaya+</Header>
      ...
      <CTA>Попробовать</CTA>
    </div>
  );
};

const App = ({index, app}: {index:number, app: T_App}) => {
  const left = index % 2 == 0;
  return (
    <div className={classNames("flex w-full text-main sm:p-4 mb-10 items-center", left? "flex-row" : "flex-row-reverse" )}>
      <img src={app.image.mobile} className="w-1/3 lg:hidden"></img>
      <img src={app.image.laptop} className="hidden w-1/2 lg:block p-4"></img>
      <div className={classNames("flex flex-col px-2 sm:px-4 lg:items-center lg:text-center", left ? "items-start text-start" : "items-end text-end")}>
        <h2 className='sm:text-4xl lg:text-5xl lg:mb-4 font-fut'>{app.title}</h2>
        <h3 className='sm:text-2xl lg:text-3xl mb-4 lg:mb-8 w-full'>
          {app.subtitle}
        </h3>
        <div className="flex flex-row mb-4 lg:mb-8 text-xl sm:text-4xl lg:text-6xl text-center">
          <div className="flex flex-col mr-4 items-center">
            <div className="flex flex-row items-center justify-center font-bold">
              <FaStar className='text-yellow-500' /> 
              {app.rating}
            </div>
            <span className='sm:text-xl lg:text-2xl'>App Store raiting</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex flex-row items-center justify-center font-bold">
              <BsFillPersonFill className='text-purple-500'/> {app.users}
            </div>
            <span className='sm:text-xl lg:text-2xl'>Monthly active users
            </span>
          </div>
        </div>
        <CTA className='px-10 text-xl'>Скачать</CTA>
      </div>
    </div>
  )
}

export default AppGallery;