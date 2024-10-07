
import classNames from "classnames";
import CTA from "./CTA";
import BgFigure from "./BgFigure";


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
    <div className='bg-gradient-to-r -mt-40 pt-60 pb-40 relative'>
      <div className="container text-center flex flex-col items-center relative z-10">
        <h1 className="font-fut text-4xl md:text-6xl mb-4 drop-shadow-xl">Учебное путешествие, которое меняется вместе с вашим ребёнком</h1>
        <h2 className="text-2xl md:text-3xl mb-10">Нажмите на круги, чтобы узнать чему они научатся на каждом этапе</h2>
        <div className="relative flex flex-row bg-white text-accent border-white border-8 shadow-inner shadow-gray-300 rounded-3xl drop-shadow-xl text-nowrap text-center">
          <MyButton onClick={()=>{}}>
            2-3
          </MyButton>
          <MyButton onClick={()=>{}}>
            4-5
          </MyButton>
          <MyButton onClick={()=>{}}>
            6+
          </MyButton>
          {/*<div className={`absolute left-0 top-0 translate-x-[${100*slide}%] h-full w-1/3 bg-accent text-white rounded-[1rem] z-10 overflow-hidden text-nowrap transition-all`}>
            <div className={`-translate-x-${slide==1?"full":`[${100*slide}%]`} transition-all flex flex-row`}>
              <MyButton onClick={()=>{}}>
                2-3
              </MyButton>
              <MyButton onClick={()=>{}}>
                4-5
              </MyButton>
              <MyButton onClick={()=>{}}>
                6+
              </MyButton>
            </div>
          </div>*/}
          <div className="absolute left-1/3 top-0 h-full w-1/3 bg-yellow-400 text-white rounded-[1rem] z-10 shadow-lg">
            <MyButton onClick={()=>{}}>
                4-5
            </MyButton>
          </div>
        </div>
        <div className="mt-10">
          <img src="amaya/index/mobile/iphone.webp" alt="" className="lg:hidden"/>
          <img src="amaya/index/tablet/ipad.webp" alt="" className="hidden lg:block"/>
        </div>
        <CTA className="mt-20 w-min md:w-max">Подобрать игры</CTA>
      </div>
      <BgFigure/>
    </div>
  );
};

export default Try;
