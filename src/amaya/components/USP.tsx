import classNames from "classnames";
import Header from "@components/Section/Header";
import Section from "@components/Section/Section";
import Body from "@components/Section/Body";

type T_Card = {
  title: string,
  subtitle: string | JSX.Element,
  image: string
}

const cards: T_Card[] = [
  {
    title: "Полный доступ ко всем приложениям",
    subtitle: "Более 2000 часов игр и веселья с коллекцией из 25+ занимательных приложений!",
    image: "cards/picture1.webp"
  },
  {
    title: "Для детей с самыми разными интересами",
    subtitle: "Множество приложений для постоянно меняющихся интересов ваших малышей.",
    image: "cards/picture2.webp"
  },
  {
    title: "Создано для детей",
    subtitle: "Нам доверяют миллионы детей и их родители.",
    image: "cards/picture3.webp"
  },
  {
    title: "Играйте офлайн",
    subtitle: (<span>Нет интернета?<br/> Ничего страшного! <br /> Вы можете играть офлайн.</span>),
    image: "cards/picture4.webp"
  },
  {
    title: "Все приложения Amaya+ в одном месте",
    subtitle: "Больше не придётся искать новые приложения – просто зайдите в Библиотеку и играйте!",
    image: "cards/picture5.webp"
  },
]


export default function USP() {

  return (
    <Section className="sm:px-4">
      <Header className="text-4xl md:text-6xl">Играй и веселись вместе с <span className="text-5xl md:text-7xl">Amaya+</span></Header>
      <Body className="mt-10">
        <div className="lg:flex flex-row items-end">
          {cards.slice(0, 3).map((e, index)=>Card(index, e))}
        </div>
        <div className="lg:flex flex-row-reverse w-full">
          {cards.slice(3, 6).map((e, index)=>Card(index+1, e))}
          <div className="w-full lg:min-w-1/3 relative">
            <img src="iphone.webp" alt="" className="w-1/2 mx-auto z-10 relative lg:-rotate-6 lg:w-full"/>
            <img src="spot.svg" alt="" className="absolute w-full lg:min-w-[160%] -translate-x-1/2 lg:left-1/3 left-1/2 top-1/2 -translate-y-1/2 z-0" />
            <div className="absolute w-2/5 lg:w-1/2 top-6 md:top-14 xl:top-16 right-0 lg:right-4 z-20 text-accent font-fut sm:text-3xl md:text-2xl xl:text-3xl  rotate-12 lg:rotate-0 text-center flex flex-col items-center">
              Посмотрите видео об 
              <img src="amaya/Logo.webp" alt="" className="w-2/3 l:w-full mx-auto"/>
            </div>
            <img src="bubble.svg" alt="" className="absolute w-2/5 top-0 right-0 z-10 lg:w-3/4 2xl:w-2/3 lg:top-10 xl:top-8 lg:-right-6 lg:-rotate-6"/> 
          </div>
        </div>
      </Body>
    </Section>
  )
}


function Card(index: number, card: T_Card){
  const {title, subtitle, image}= card;
  const left = index % 2 == 0;
  return (
    <div className={
      classNames("mb-12 px-1 lg:px-6 xl:px-10 w-full flex items-center justify-between lg:flex-col lg:justify-start", left ? "flex-row" : "flex-row-reverse")
    }>
      <img src={image} alt="" className="w-2/5 lg:w-auto lg:mb-16"/>
      <div className={classNames("w-1/2 lg:w-auto lg:text-center ", left ? "text-left" : "text-right")}>
        <h4 className="text-2xl sm:text-4xl mb-4">{title}</h4>
        <h6 className="font-sans sm:text-2xl text-wrap">{subtitle}</h6>
      </div>
    </div>
  )
}