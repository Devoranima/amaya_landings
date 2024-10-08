import Section from '@components/Section/Section';
import Header from '@components/Section/Header';
import Body from '@components/Section/Body';
import CTA from './CTA';
import React from 'react';

const JoinUs = () => {
  return (
    <Section className='bg-white pb-20 mb-0'>
      <Header className=''>
        Присоединяйтесь к Amaya Kids World!
      </Header>
      <Body className='mt-10 relative'>
        <h2 className='text-xl leading-normal font-semibold text-center'>
          <div className="">
            Готовы сделать игры увлекательными и развивающими
            для своего ребёнка?
          </div>
          <div className="mt-2">
            Присоединяйтесь к нашему растущему сообществу
            родителей и детей уже сегодня!
          </div>
        </h2>
        <div className="w-full mt-20 px-6 lg:w-1/2 mx-auto">
          <div className="relative">
            <div className="px-5 w-full absolute -translate-x-1/2 -translate-y-full left-1/2 top-0">
              <div className="w-full text-center text-white bg-red-500 rounded-tl-3xl rounded-tr-3xl text-xl lg:text-2xl font-semibold py-2">
                Специальное предложение!
              </div>
            </div>
            <div className="w-full outline outline-2 outline-accent shadow-2xl rounded-3xl py-4 text-center bg-white relative">
              <h3 className="text-accent text-3xl lg:text-4xl font-black mb-4">Навсегда</h3>
              <h4 className="text-2xl lg:text-3xl font-bold">$14.99 one time</h4>
              <h4 className="text-1xl lg:text-2xl font-bold text-gray-400 mb-2 line-through">$79.99</h4>
              <CTA
                className='max-w-[98%] lg:max-w-fit mx-auto px-16 '
                customPaddingX
              >Попробовать</CTA>
              <img src="tag.webp" alt="" className="w-[15%] absolute top-2 right-[15%] translate-x-full" />
            </div>
          </div>

        </div>
        <img src="m6/index/shared/Cube.svg" alt="" className='hidden lg:block absolute left-1/2 bottom-0 w-full -translate-x-1/2 ' />

      </Body>

    </Section>
  );
};

export default JoinUs;