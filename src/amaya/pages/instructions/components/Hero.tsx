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
      <img src="amaya/instruction/shared/kids.webp" alt="" className="mt-10 lg:mt-20"/>
      <h1 className="font-fut text-accent text-6xl mt-10 lg:mt-20">Thanks for your purchase!</h1>
      <h5 className="mt-10 text-2xl md:text-3xl lg:text-4xl text-main">Now you can enjoy a collection
      of <span className="font-bold">more than 25 Amaya+ apps.</span></h5>
    </div>
  )
}


const Start = () => {
  return (
    <div className="mt-20 w-full text-center bg-gradient-to-r from-[#f87413] via-[#ffa13d] to-[#f87413] py-10 relative overflow-hidden">
      <div className="container flex flex-col items-center relative z-10">
        <h1 className="font-fut text-white text-2xl md:text-3xl lg:text-5xl">Start your journey through the Amaya+ World
        with one of our best apps:</h1>
        <div className="">
          <img src="amaya/instruction/shared/farm.webp" alt="" className="mt-10"/>
          <img src="amaya/instruction/shared/icon.webp" alt="" className="max-w-[25%] ml-[5%] -mt-[10%]"/>
        </div>
        <a className="w-80 border-none outline-none p-0 mt-4 md:-mt-4">
          <img src="AppStore.webp" alt="" />
        </a>
      </div>
      <BG/>
    </div>
  )
}

const BG = () => {
  return (
    <div className="absolute z-0 w-full h-full left-0 top-0">
      <svg 
        className='absolute opacity-40 aspect-square w-24'
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 75.5 75.5" 

        >
        <path fill-rule="evenodd"  stroke="rgb(255, 208, 96)" stroke-width="7px" stroke-linecap="butt" stroke-linejoin="round" opacity="0.239" fill="none"
        d="M7.127,28.533 L43.527,7.388 L64.670,43.787 L28.271,64.931 L7.127,28.533 Z"/>
      </svg>
      <svg 
        className='absolute -left-10 bottom-1/3 translate-y-1/2 z-10 opacity-50 aspect-square w-96'
        xmlns="http://www.w3.org/2000/svg"
        viewBox='0 0 356.5 356.5'
        >
        <path fill-rule="evenodd"  stroke="rgb(255, 208, 96)" stroke-width="7px" stroke-linecap="butt" stroke-linejoin="round" opacity="0.161" fill="rgb(255, 208, 96)"
        d="M192.925,7.469 L345.561,192.804 L160.227,345.440 L7.591,160.106 L192.925,7.469 Z"/>
      </svg>
      <svg 
        className='absolute opacity-60 aspect-square w-80 -top-20 left-1/3'
        xmlns="http://www.w3.org/2000/svg"
        viewBox='0 0 187.5 187.5'
        >
        <path fill-rule="evenodd"  stroke="rgb(255, 208, 96)" stroke-width="7px" stroke-linecap="butt" stroke-linejoin="miter" opacity="0.11" fill="rgb(255, 208, 96)"
        d="M92.094,3.812 C140.747,3.812 180.187,43.252 180.187,91.906 C180.187,140.558 140.747,179.999 92.094,179.999 C43.441,179.999 3.1000,140.558 3.1000,91.906 C3.1000,43.252 43.441,3.812 92.094,3.812 Z"/>
      </svg>
      <svg
        className='absolute opacity-50 aspect-square w-80 -top-20 -right-20'
      xmlns="http://www.w3.org/2000/svg"
      viewBox='0 0 283 282'
      >
      <path fill-rule="evenodd"  stroke="rgb(255, 208, 96)" stroke-width="8px" stroke-linecap="butt" stroke-linejoin="miter" opacity="0.569" fill="none"
      d="M139.516,4.001 C214.031,4.001 274.437,64.398 274.437,138.906 C274.437,213.411 214.031,273.812 139.516,273.812 C65.000,273.812 4.594,213.411 4.594,138.906 C4.594,64.398 65.000,4.001 139.516,4.001 Z"/>
      </svg>
      <svg
        className='absolute opacity-50 aspect-square w-40 bottom-20 right-20 z-10'
        xmlns="http://www.w3.org/2000/svg"
        viewBox='0 0 104 104'
        >
          
        <path fill-rule="evenodd"  stroke="rgb(255, 208, 96)" stroke-width="7px" stroke-linecap="butt" stroke-linejoin="round" opacity="0.412" fill="none"
        d="M39.550,7.925 L92.466,40.120 L60.270,93.037 L7.353,60.841 L39.550,7.925 Z"/>
      </svg>
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