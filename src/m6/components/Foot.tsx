export default function Foot() {
  return (
    <div className="w-full bg-white">
      <div className="w-full flex flex-col items-center underline text-xl lg:hidden text-slate-700">
        <a href="" className="mb-4 lg:mb-10">
          Terms of Use
        </a>
        <a href="" className="">
          Privacy Policy
        </a>
      </div>
      <div className="mt-10 lg:mt-0 bg-blu w-full z-10 relative">
        <div className='lg:hidden container mx-auto text-center py-8 text-lg'>
          © 2024, Amaya Kids World | All rights reserved
        </div>
        <div className="container flex-row justify-between items-stretch hidden lg:flex py-6 text-2xl">
          <div className="">
            <div className="mt-2">© 2024, Amaya Kids World | All rights reserved</div>
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
