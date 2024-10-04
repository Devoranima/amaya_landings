import React from "react";
import { CarouselApi } from "@components/ui/carousel";
import classNames from "classnames";
import CTA from "./CTA";
import BgFigure from "./BgFigure";



const MyButton = (props: MyComponentProps & {onClick: ()=>void}) => {
  return(
    <div 
      className={classNames("text-accent text-5xl px-10 py-4 font-bold ", props.className)}
      onClick={props.onClick}
    >
      {props.children}
    </div>
  )
}

const Try = () => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(0)
 
  React.useEffect(() => {
    if (!api) {
      return
    }
 
    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)
 
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  //React.useEffect(()=>{

  //}, [current])

  const myScroll = (index: number) =>{
    if (!api) return;
    api.scrollTo(index)
    setCurrent(index)
  }


  return (
    <div className='bg-gradient-to-r -mt-40 pt-60 pb-20 relative'>
      <div className="container text-center flex flex-col items-center relative z-10">
        <h1 className="font-fut text-4xl md:text-6xl mb-4 drop-shadow-xl">Учебное путешествие, которое меняется вместе с вашим ребёнком</h1>
        <h2 className="text-2xl md:text-3xl mb-10">Нажмите на круги, чтобы узнать чему они научатся на каждом этапе</h2>
        <CTA>Подобрать игры</CTA>
      </div>
      <BgFigure/>
    </div>
  );
};

export default Try;

