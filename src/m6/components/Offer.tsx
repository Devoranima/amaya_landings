import CTA from "./CTA";
import Section from '@components/Section/Section';
import Header from '@components/Section/Header';
import Body from '@components/Section/Body';
import { FaCheck } from "react-icons/fa6";


const bulltetpoints = [
  "Неограниченный доступ к приложениям Amaya+",
  "Возможность играть на других девайсах",
  "Больше 2000 игровых и обучающих часов",
  "Доступ ко всем активностям без интернета"
]

export default function Offer
() {
  return (
    <Section>
      <Header>Уже готовы попробовать?</Header>
      <Body className="flex flex-col items-center">
        <div className="w-full lg:w-max mx-auto mb-8">
          {bulltetpoints.map(e=>listElement(e))}
        </div>
        <div className="flex flex-col items-center font-sans lg:flex-row lg:items-end mb-12 w-full">
          <div className="w-full px-10 lg:max-w-1/2 mb-10 lg:mb-0 ">
            <div className="w-full outline outline-2 outline-accent rounded-[3rem] p-10 text-center shadow-xl bg-white">
              <h3 className="text-accent text-5xl font-black mb-4">Месячная подписка</h3>
              <h4 className="text-3xl font-bold mb-12 lg:mb-18">$9.99 / month</h4>
              <h5 className="text-2xl font-bold text-gray-400">Оплата раз в период $14.99</h5>
            </div>
          </div>
          <div className="w-full px-10 lg:max-w-1/2">
            <div className="w-full flex flex-col items-center">
              <div className="w-2/3 sm:w-auto lg:w-min xl:w-auto text-center text-white bg-red-500 rounded-tl-3xl rounded-tr-3xl text-2xl font-semibold py-2 px-6">
                Специальное предложение!
              </div>
              <div className="w-full outline outline-2 outline-slate-700 shadow-xl rounded-[3rem] p-10 text-center bg-white relative">
                <h3 className="text-accent text-5xl font-black mb-4">Годовая подписка</h3>
                <h4 className="text-3xl font-bold">$14.99 one time</h4>
                <h4 className="text-2xl font-bold text-gray-400 mb-8 line-through">$79.99</h4>
                <h5 className="text-2xl font-bold text-gray-400">Оплата раз в период $14.99</h5>
                <img src="tag.webp" alt="" className="w-1/6 absolute top-2 right-2 translate-x-1/2"/>
              </div>
            </div>
          </div>
        </div>
        <CTA className="shadow-2xl mb-4">
            Начать пробный период
        </CTA>
        <h4 className="text-xl text-gray-700">First 3 days free, then $9.99 per month.</h4>
      </Body>
    </Section>
  )
}


const listElement = (children: string | JSX.Element) => {
  return (
    <div className="flex flex-row justify-start items-center text-xl sm:text-3xl mb-4 px-6">
      <FaCheck className="text-accent font-black mr-6"/>
      {children}
    </div>
  )
}