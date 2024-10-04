import { FaCheck } from "react-icons/fa6";

const Stages = () => {
  return (
    <div className="w-full py-10 bg-slate-100 border-slate-300 text-slate-300 border-2 border-l-0 border-r-0">
      <div className="px-[20%] md:px-0 w-full md:w-1/2 lg:w-1/4 mx-auto">
        <div className="w-full flex flex-row items-center justify-between relative">
          <div className="-translate-y-1/2 top-1/2 w-full h-2 bg-slate-200 content-none absolute z-0"></div>
          <div className="bg-slate-300 rounded-full aspect-square flex flex-col items-center justify-center -translate-x-1/2 w-20">
            <FaCheck className="text-slate-100 size-[60%]"/>
          </div>
          <div className="bg-slate-300 rounded-full w-20 aspect-square flex flex-col items-center justify-center z-10">
            <FaCheck className="text-slate-100 size-[60%]"/>
          </div>
          <div className="bg-accent rounded-full w-20 aspect-square flex flex-col items-center justify-center translate-x-1/2 outline-4 outline-white outline shadow-inner drop-shadow-2xl">
            <div className="text-white text-5xl font-semibold">3</div>
          </div>
        </div>
      <div className="w-full flex flex-row items-center justify-between text-center text-md font-bold mt-4">
        <div className="-translate-x-1/2 w-40">Create <br></br> Account</div>

        <div className="w-40">Subscription<br></br>Payment</div>

        <div className="translate-x-1/2 w-40 text-slate-700">Payment <br></br>Completed</div>
      </div>
      
      </div>
    </div>
  )
}

const Thanks = () => {
  return (
    <div className="flex flex-col items-center container text-center">
      <img src="m6/instruction/shared/Kids.webp" alt="" className="mt-10 lg:mt-20 lg:w-1/2"/>
      <h1 className="font-fut text-accent text-6xl mt-10 lg:mt-20">Thanks for your purchase!</h1>
      <h5 className="mt-10 text-2xl md:text-3xl lg:text-4xl text-main">Now you can enjoy a collection of <span className="font-bold"> 500+ activities </span>in Amaya Kids World!</h5>
    </div>
  )
}


const Start = () => {
  return (
    <div className="mt-20 w-full text-center bg-blu py-10 relative overflow-hidden">
      <div className="container flex flex-col items-center">
        <h1 className="font-fut text-white text-2xl md:text-3xl lg:text-5xl">Start your journey through the <span className="text-yellow-400">Amaya Kids World</span> with one of our best apps:</h1>
        <div className="">
          <img src="m6/instruction/shared/StartApp.webp" alt="" className="mt-10"/>
          <img src="m6/instruction/shared/icon.webp" alt="" className="max-w-[25%] ml-[5%] -mt-[10%]"/>
        </div>

      </div>
      <a className="block mx-auto w-80 border-none outline-none p-0 mt-4 md:-mt-4">
        <img src="AppStore.webp" alt="" />
      </a>
    </div>
  )
}

const Hero = () => {
  return (
    <div className='w-full flex flex-col items-center bg-white'>
      <Stages/>
      <Thanks/>
      <Start/>
    </div>
  );
};

export default Hero;