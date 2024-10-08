import classNames from "classnames";
import CTA from "./CTA";
import BgFigure from "./BgFigure";
import React from "react";
import Section from "@/components/Section/Section";
import Header from "@/components/Section/Header";


const MyButton = (props: MyComponentProps & {onClick: ()=>void}) => {
  return(
    <div 
      className={classNames("text-3xl md:text-5xl px-10 py-4 font-bold flex-1", props.className)}
      onClick={props.onClick}
    >
      {props.children}
    </div>
  )
}

const Try = () => {
  return (
    <Section className='bg-gradient-to-r -mt-40 pt-60 pb-40 relative'>
      <div className="container text-white text-center flex flex-col items-center relative z-10">
        <Header className="drop-shadow-2xl">Учебное путешествие, которое меняется вместе с вашим ребёнком</Header>
        <h2 className="text-lg lg:text-3xl mt-10">Нажмите на круги, чтобы узнать чему они научатся на каждом этапе</h2>
        <div className="mt-8 relative flex flex-row bg-white text-accent border-white border-8 shadow-inner shadow-gray-300 rounded-3xl drop-shadow-xl text-nowrap text-center">
          <MyButton onClick={()=>{}}>
            2-3
          </MyButton>
          <MyButton onClick={()=>{}}>
            4-5
          </MyButton>
          <MyButton onClick={()=>{}}>
            6+
          </MyButton>
          <div className="absolute left-0 top-0 h-full w-1/3 bg-accent text-white rounded-[1rem] z-10 ">
            <MyButton onClick={()=>{}}>
                2-3
            </MyButton>
          </div>
        </div>
        <div className="mt-10">
          <img src="amaya/index/mobile/iphone.webp" alt="" className="lg:hidden"/>
          <img src="amaya/index/tablet/ipad.webp" alt="" className="hidden lg:block"/>
        </div>
        <CTA className="mt-10 w-min md:w-max">Подобрать игры</CTA>
      </div>
      <BgFigure/>
    </Section>
  );
};

export default Try;

