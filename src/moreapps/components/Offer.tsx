import CTA from "./CTA";
import Section from '@components/Section/Section';
import Header from '@components/Section/Header';
import Body from '@components/Section/Body';
import { FaCheck } from "react-icons/fa6";
import React from "react";

const bulltetpoints = [
  "Неограниченный доступ к приложениям Amaya+",
  "Возможность играть на других девайсах",
  "Больше 2000 игровых и обучающих часов",
  "Доступ ко всем активностям без интернета"
]

export default function  Offer
() {
  return (
    <Section className="mt-20">
      <Header className="text-4xl md:text-6xl">Уже готовы попробовать?</Header>
      <Body className="mt-10 flex flex-col items-center">
        <div className="w-full lg:w-max mx-auto mb-8">
          {bulltetpoints.map(e=>listElement(e))}
        </div>
        <div className="flex flex-col items-center font-sans lg:flex-row lg:items-end w-full">
          <div className="w-full px-2 lg:px-6 lg:w-1/2">
            <div className="w-full outline outline-2 outline-accent rounded-[3rem] py-10 text-center shadow-2xl bg-white">
              <h3 className="text-accent text-5xl md:text-6xl font-black mb-4">Месячная подписка</h3>
              <h4 className="text-3xl md:text-4xl font-bold">$9.99 / month</h4>
              <h4 className="text-2xl md:text-3xl font-bold text-gray-400 mb-8 line-through invisible">$79.99</h4>
              <h5 className="text-2xl md:text-3xl font-bold text-gray-400">Оплата раз в период $14.99</h5>
            </div>
          </div>
          <div className="w-full mt-28 px-2 lg:px-6 lg:w-1/2">
            <div className="relative">
              <div className="absolute -translate-x-1/2 -translate-y-full left-1/2 top-0 w-4/5 text-center text-white bg-red-500 rounded-tl-3xl rounded-tr-3xl text-2xl md:text-3xl font-semibold py-2">
                Специальное предложение!
              </div>
              <div className="w-full outline outline-2 outline-slate-700 shadow-xl rounded-[3rem] py-10 text-center bg-white relative">
                <h3 className="text-accent text-5xl md:text-6xl font-black mb-4">Годовая подписка</h3>
                <h4 className="text-3xl md:text-4xl font-bold">$14.99 one time</h4>
                <h4 className="text-2xl md:text-3xl font-bold text-gray-400 mb-8 line-through">$79.99</h4>
                <h5 className="text-2xl md:text-3xl font-bold text-gray-400">Оплата раз в период $14.99</h5>
                <img src="tag.webp" alt="" className="w-[15%] absolute top-2 right-[10%] translate-x-full"/>
              </div>
            </div>
          </div>
        </div>
        <CTA className="shadow-2xl mt-20 w-min md:w-max">
            Начать пробный период
        </CTA>
        <h4 className="mt-10 text-xl text-gray-700">First 3 days free, then $9.99 per month.</h4>
      </Body>
    </Section>
  )
}


const listElement = (children: string | JSX.Element) => {
  return (
    <div className="flex flex-row justify-start items-center text-xl sm:text-3xl mb-4 px-6">
      <FaCheck className="text-accent font-black mr-4"/>
      {children}
    </div>
  )
}