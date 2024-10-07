
export default function Foot() {
  return (
    <div className="w-full mt-20">
      <div className="w-full flex flex-col items-center underline text-xl lg:hidden text-slate-700">
        <img src="amaya/Logo.webp" alt="" className="lg:hidden mb-10 max-w-[90%]"/>
        <a href="" className="mb-4 lg:mb-10">
          Terms of Use
        </a>
        <a href="" className="">
          Privacy Policy
        </a>
      </div>
      <div className="mt-10 bg-gradient-to-r from-[#f87413] via-[#ffa13d] to-[#f87413] w-full z-10 relative">
        <div className='lg:hidden container mx-auto text-center py-8 text-xl'>
        © 2024, Amaya+ I All rights reserved
        </div>
        <div className="container flex-row justify-between items-stretch hidden lg:flex py-6 text-2xl">
          <div className="">
            <img src="amaya/Logo_inverse.webp" alt="" />
            <div className="mt-2">© 2024, Amaya+ I All rights reserved</div>
          </div>
          <div className="underline text-end flex flex-col justify-evenly *:block">
            <a href="" className="">
              Terms of Use
            </a>
            <a href="" className="">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
