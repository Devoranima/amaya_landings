import CTA from "./CTA";
import Section from '@components/Section/Section';
import Header from '@components/Section/Header';
import Body from '@components/Section/Body';
import { FaCheck } from "react-icons/fa6";



const bulltetpoints = [
  "Неограниченный доступ к приложениям Amaya Kids World",
  "Возможность играть на других девайсах",
  "Больше 2000 игровых и обучающих часов",
  "Доступ ко всем активностям без интернета"
]

export default function  Offer
() {
  return (
    <Section className="mt-20">
      <Header className="text-2xl lg:text-4xl">Уже готовы попробовать?</Header>
      <Body className="mt-10 flex flex-col items-center">
        <div className="font-fut mx-2">
          {bulltetpoints.map(e=>listElement(e))}
        </div>
        <div className="mt-10 lg:mt-16 flex flex-col items-center font-sans lg:flex-row lg:items-end w-full">
          <div className="w-full px-6 lg:w-1/2">
            <div className="w-full outline outline-2 outline-accent rounded-3xl py-4 text-center shadow-2xl bg-white">
              <h3 className="text-accent text-3xl lg:text-4xl font-black mb-4">Месячная подписка</h3>
              <h4 className="text-2xl lg:text-3xl font-bold">$9.99 / month</h4>
              <h4 className="text-1xl lg:text-2xl invisible mb-2">spacer</h4>
              <h5 className="text-1xl lg:text-2xl font-bold text-gray-400">Оплата раз в период $14.99</h5>
            </div>
          </div>
          <div className="w-full mt-20 lg:mt-0 px-6 lg:w-1/2">
            <div className="relative">
              <div className="px-5 w-full absolute -translate-x-1/2 -translate-y-full left-1/2 top-0">
                <div className="w-full text-center text-white bg-red-500 rounded-tl-3xl rounded-tr-3xl text-xl lg:text-2xl font-semibold py-2">
                  Специальное предложение!
                </div>
              </div>
              <div className="w-full outline outline-2 outline-slate-700 shadow-2xl rounded-3xl py-4 text-center bg-white relative">
                <h3 className="text-accent text-3xl lg:text-4xl font-black mb-4">Годовая подписка</h3>
                <h4 className="text-2xl lg:text-3xl font-bold">$14.99 one time</h4>
                <h4 className="text-1xl lg:text-2xl font-bold text-gray-400 mb-2 line-through">$79.99</h4>
                <h5 className="text-1xl lg:text-2xl font-bold text-gray-400">Оплата раз в период $14.99</h5>
                <img src="tag.webp" alt="" className="w-[15%] absolute top-2 right-[10%] translate-x-full"/>
              </div>
            </div>
          </div>
        </div>
        <CTA 
          className="shadow-2xl mt-10 max-w-max text-xl lg:text-3xl px-14 lg:px-20" 
          customSize
          customPaddingX
        >
            Начать пробный период
        </CTA>
        <h4 className="mt-4 text-lg lg:text-xl text-gray-700">First 3 days free, then $9.99 per month.</h4>
      </Body>
    </Section>
  )
}


const listElement = (children: string | JSX.Element) => {
  return (
    <div className="flex flex-row justify-start items-center mb-4">
      <FaCheck className="text-accent text-xl mr-2 shr"/>
      <div className="text-md lg:text-xl">
        {children}
      </div>
    </div>
  )
}