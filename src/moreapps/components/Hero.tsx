import CTA from './CTA'
import React
  from 'react'
export default function Hero() {

  return (
    <div className='hero_bg bg-gradient-to-r from-[#f87413] to-[#ffa13d] relative'>
      <div className="">
        <svg
          className='absolute opacity-40 aspect-square w-24'
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 75.5 75.5"

        >
          <path fill-rule="evenodd" stroke="rgb(255, 208, 96)" stroke-width="7px" stroke-linecap="butt" stroke-linejoin="round" opacity="0.239" fill="none"
            d="M7.127,28.533 L43.527,7.388 L64.670,43.787 L28.271,64.931 L7.127,28.533 Z" />
        </svg>
        <svg
          className='absolute -left-10 bottom-1/3 translate-y-1/2 z-10 opacity-50 aspect-square w-96'
          xmlns="http://www.w3.org/2000/svg"
          viewBox='0 0 356.5 356.5'
        >
          <path fill-rule="evenodd" stroke="rgb(255, 208, 96)" stroke-width="7px" stroke-linecap="butt" stroke-linejoin="round" opacity="0.161" fill="rgb(255, 208, 96)"
            d="M192.925,7.469 L345.561,192.804 L160.227,345.440 L7.591,160.106 L192.925,7.469 Z" />
        </svg>
        <svg
          className='absolute opacity-60 aspect-square w-80 -top-20 left-1/3'
          xmlns="http://www.w3.org/2000/svg"
          viewBox='0 0 187.5 187.5'
        >
          <path fill-rule="evenodd" stroke="rgb(255, 208, 96)" stroke-width="7px" stroke-linecap="butt" stroke-linejoin="miter" opacity="0.11" fill="rgb(255, 208, 96)"
            d="M92.094,3.812 C140.747,3.812 180.187,43.252 180.187,91.906 C180.187,140.558 140.747,179.999 92.094,179.999 C43.441,179.999 3.1000,140.558 3.1000,91.906 C3.1000,43.252 43.441,3.812 92.094,3.812 Z" />
        </svg>
        <svg
          className='absolute opacity-50 aspect-square w-80 -top-20 -right-20'
          xmlns="http://www.w3.org/2000/svg"
          viewBox='0 0 283 282'
        >
          <path fill-rule="evenodd" stroke="rgb(255, 208, 96)" stroke-width="8px" stroke-linecap="butt" stroke-linejoin="miter" opacity="0.569" fill="none"
            d="M139.516,4.001 C214.031,4.001 274.437,64.398 274.437,138.906 C274.437,213.411 214.031,273.812 139.516,273.812 C65.000,273.812 4.594,213.411 4.594,138.906 C4.594,64.398 65.000,4.001 139.516,4.001 Z" />
        </svg>
        <svg
          className='absolute opacity-50 aspect-square w-40 bottom-20 right-20 z-10'
          xmlns="http://www.w3.org/2000/svg"
          viewBox='0 0 104 104'
        >

          <path fill-rule="evenodd" stroke="rgb(255, 208, 96)" stroke-width="7px" stroke-linecap="butt" stroke-linejoin="round" opacity="0.412" fill="none"
            d="M39.550,7.925 L92.466,40.120 L60.270,93.037 L7.353,60.841 L39.550,7.925 Z" />
        </svg>
      </div>
      <div className="container relative z-10 w-full pt-10">
        <div className="flex flex-col items-center text-center lg:text-left lg:items-start leading-tight">
          <div className="lg:ml-6 w-full lg:w-1/2">

            <h1 className='text-3xl my-6 font-fut'>Добро пожаловать в <br /> <span className='text-4xl'>Amaya+</span></h1>

            <h2 className='text-xl lg:text-2xl'>Играйте, учитесь и веселитесь с нашим сборником из более <b>25 увлекательных приложений</b>.</h2>
          </div>

          <img 
            src="amaya/index/tablet/characters.webp" 
            alt="" 
            className='hidden lg:block w-[55%] absolute right-0 top-1/2 -translate-y-1/2'
          />
          <img 
            src="amaya/index/mobile/characters.webp" 
            alt="" 
            className='w-full static lg:hidden' 
          />

          <div className='hidden lg:block mt-10 bg-[#ee6b09] text-2xl text-left p-8 rounded-3xl leading-snug font-fut'>
            Lifetime access to 25+ apps <br />
            for just $14.99 <span className='line-through text-3xl font-sans'>$79.99</span>
          </div>

          <div className='block lg:hidden bg-[#ee6b09] text-xl text-center p-6 rounded-3xl leading-snug font-fut'>
            All 25+ apps in ONE subscription <br /> $0.99 first month.
            <div className='text-xl font-sans'>Renews for $9.99 / month</div>
          </div>

          <CTA className='mt-10 max-w-min px-16' customPaddingX>
            Попробовать
          </CTA>
        </div>
      </div>
      <div className="w-full z-0 relative">
        <svg
          className="w-full"
          viewBox="0 0 1684 216"
          fill="#fffff" xmlns="http://www.w3.org/2000/svg">
          <path d="M1175.09 76.8579C1355.94 51.0999 1480.83 97.5179 1530.42 143.495C1562.15 172.921 1614.05 202.22 1684 215.442V0H0V162.341C42.757 144.118 130.259 108.696 203.079 97.4829C302.641 82.1549 367.433 143.404 581.583 153.808C795.733 164.211 994.235 102.616 1175.09 76.8579Z" fill="url(#paint0_linear_2001_6)" />
          <defs>
            <linearGradient id="paint0_linear_2001_6" x1="0" y1="108" x2="1684" y2="108" gradientUnits="userSpaceOnUse">
              <stop stop-color="#F87413" />
              <stop offset="1" stop-color="#FFA13D" />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute w-full h-full bg-[#f4f5ff] -bottom-1 left-0 -z-10">.</div>
      </div>

    </div>
  )
}
