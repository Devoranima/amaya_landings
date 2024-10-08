import CTA from './CTA'

export default function   Hero() {

  return (
    <div className='relative bg-blu'>
      <div className="container relative z-10 w-full pt-10">
        <div className="flex flex-col items-center text-center lg:text-left lg:items-start leading-tight">
          <div className="w-full lg:pl-6 lg:w-1/2">
            <h1 className= 'text-3xl my-6 font-fut'>Добро пожаловать в <br /> <span className='text-4xl text-yellow-300'>Amaya Kids World</span></h1>

            <h2 className='text-xl lg:text-2xl'>A collection of more than <b>500 fun and educational games and activities</b>.</h2>
            
            <h2 className='hidden lg:block text-2xl mt-10'>Играйте, учитесь и получайте массу веселья в более <b>2000+</b> активностей <span className='text-yellow-300'>в одном приложении!</span></h2>
          </div>

          <img src="m6/index/shared/Kids.webp" alt="" className='w-full lg:block lg:w-1/2 static lg:absolute right-0 top-1/2 lg:-translate-y-1/2 mb-8' />

          <h2 className='text-xl lg:hidden'>Играйте, учитесь и получайте массу веселья в более <b>2000+</b> активностей <span className='text-yellow-300'>в одном приложении!</span></h2>
          <CTA className='lg:ml-6 mt-10 lg:mt-20 lg:max-w-min px-16' customPaddingX>
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
              <stop stop-color="#00c5eb" />
              <stop offset="1" stop-color="#00c5eb" />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute w-full h-full bg-[#f4f5ff] -bottom-1 left-0 -z-10">.</div>
      </div>

    </div>
  )
}
