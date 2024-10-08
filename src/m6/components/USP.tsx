import classNames from "classnames";
import Header from "@components/Section/Header";
import Section from "@components/Section/Section";
import Body from "@components/Section/Body";
import CTA from "./CTA";

type T_Card = {
  title: string,
  subtitle: string | JSX.Element,
  image: string
}

const cards: T_Card[] = [
  {
    title: "Полный доступ ко всем приложениям",
    subtitle: "Более 2000 часов игр и веселья с коллекцией из 25+ занимательных приложений!",
    image: "m6/index/shared/Card1.webp"
  },
  {
    title: "Для детей с самыми разными интересами",
    subtitle: "Множество приложений для постоянно меняющихся интересов ваших малышей.",
    image: "m6/index/shared/Card2.webp"
  },
  {
    title: "Создано для детей",
    subtitle: "Нам доверяют миллионы детей и их родители.",
    image: "m6/index/shared/Card3.webp"
  },
  {
    title: "Играйте офлайн",
    subtitle: (<span>Нет интернета?<br/> Ничего страшного! <br /> Вы можете играть офлайн.</span>),
    image: "m6/index/shared/Card4.webp"
  },
  {
    title: "Все приложения Amaya Kids World в одном месте",
    subtitle: "Больше не придётся искать новые приложения – просто зайдите в Библиотеку и играйте!",
    image: "m6/index/shared/Card5.webp"
  },
]


export default function USP() {

  return (
    <Section className="bg-[#f4f5ff] mt-4">
      <Header className="px-4 text-2xl lg:text-4xl">Играй и веселись вместе с <br/><span className="text-3xl lg:text-5xl">Amaya Kids World</span></Header>
      <Body className="mt-10">
        <div className="lg:flex flex-row items-stretch">
          {cards.slice(0, 3).map((e, index)=>Card(index, e))}
        </div>
        <div className="lg:flex flex-row-reverse w-full *:basis-1/3 relative items-stretch">
          {cards.slice(3, 6).map((e, index)=>Card(index+1, e))}

          <CTA className="lg:hidden mt-10 max-w-fit mx-auto">Try now</CTA>

          <div className="relative mt-10 lg:mt-0 w-full lg:w-1/3 z-0 lg:absolute left-0 top-0">
            <img src="m6/index/shared/iphone.webp" alt="" className="w-3/5 mx-auto z-10 relative lg:-rotate-6 lg:w-full"/>
            <img src="m6/index/shared/spot.svg" alt="" className="absolute min-w-[140%] -translate-x-1/2 lg:left-1/3 left-1/2 top-1/2 -translate-y-1/2 z-0" />
            <div className="absolute w-1/2 top-0 right-0 z-10">
              <div className="relative">
                <div className="max-w-full absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 z-20 rotate-12 text-accent font-fut text-center text-xl">
                  Посмотрите видео об<br/><span className="text-red-500">Amaya Kids</span>
                </div>
                <img src="m6/index/shared/bubble.svg" alt="" className="w-full"/> 
              </div>
            </div>
          </div>
        </div>
        
        <CTA className="hidden lg:block mt-40 max-w-fit mx-auto px-20" customPaddingX>Try now</CTA>
      </Body>

    </Section>
  )
}


function Card(index: number, card: T_Card){
  const {title, subtitle, image}= card;
  const left = index % 2 == 0;
  return (
    <div className={
      classNames("mb-12 px-1 lg:px-6 xl:px-10 w-full flex items-center justify-around lg:flex-col", left ? "flex-row" : "flex-row-reverse")
    }>
      <img src={image} alt="" className="w-1/2 px-4 lg:w-auto"/>
      <div className={classNames("w-1/2 lg:mt-8 leading-tight lg:w-auto lg:text-center ", left ? "text-left" : "text-right")}>
        <h4 className="font-fut text-xl lg:text-2xl leading-6">{title}</h4>
        <h6 className="mt-2 lg:text-xl">{subtitle}</h6>
      </div>
    </div>
  )
}