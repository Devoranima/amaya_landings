import { ImArrowDown, ImArrowRight } from 'react-icons/im';

const ArrowDown = () => {
  return (
    <ImArrowDown className='text-5xl my-4' />
  )
}
const ArrowRight = () => {
  return (
    <ImArrowRight className='text-5xl mx-4 my-auto' />
  )
}

const Instruction = () => {
  return (
    <div className='container flex flex-col items-center text-center text-main font-fut py-10'>
      <h1 className="font-fut text-4xl mt-10 lg:mt-20">Инструкция открытия полного доступа в приложении</h1>
      <div className="w-full md:hidden flex flex-col items-center">
        <div className="max-w-[80vw] w-full mt-10 flex flex-col items-center text-2xl">
          <div className="">
            <img src="m6/instruction/mobile/1.webp" alt="" />
            Скачай и открой приложение
          </div>
          <ArrowDown />
          <div className="">
            <img src="m6/instruction/mobile/2.webp" alt="" />
            В приветственном окне выбери “Войти в аккаунт”
          </div>
          <ArrowDown />
          <div className="  ">
            <img src="m6/instruction/mobile/3.webp" alt="" />
            В окне авторизации, введи тот логин
            и пароль, которые вводил на сайте
          </div>
        </div>
        <div className="content-none h-1 w-full bg-slate-300 my-20"></div>
        <h3 className='text-4xl'>Если ты не увидел окна авторизации</h3>

        <div className="max-w-[80vw] w-full mt-10 flex flex-col items-center text-2xl">
          <div className="">
            <img src="m6/instruction/mobile/4.webp" alt="" />
            Зайди в родительсикй раздел
          </div>
          <ArrowDown />
          <div className="">
            <img src="m6/instruction/mobile/5.webp" alt="" />
            Войди в раздел “Аккаунт”
          </div>
          <ArrowDown />
          <div className="  ">
            <img src="m6/instruction/mobile/6.webp" alt="" />
            Введи тот логин и пароль, который вводил на сайте
          </div>
          <ArrowDown />
        </div>
      </div>
      <div className="w-full hidden md:block">
        <div className="w-full mt-10 flex flex-row items-start justify-between text-2xl text-center">
          <div className="w-1/4">
            <img src="m6/instruction/tablet/1.webp" alt="" className='w-full'/>
            Скачай и открой приложение
          </div>
          <ArrowRight />
          <div className="w-[28.5%]">
            <img src="m6/instruction/tablet/2.webp" alt="" className='w-full'/>
            В приветственном окне выбери “Войти в аккаунт”
          </div>
          <ArrowRight />
          <div className="w-1/4">
            <img src="m6/instruction/tablet/3.webp" alt="" className='w-full'/>
            В окне авторизации, введи тот логин
            и пароль, которые вводил на сайте
          </div>
        </div>
        <div className='text-4xl mt-10'>Если ты не увидел окна авторизации</div>
        <div className="w-full mt-10 flex flex-row items-start justify-between text-2xl text-center">
          <div className="w-[26%]">
            <img src="m6/instruction/tablet/4.webp" alt="" className='w-full'/>
            Зайди в родительсикй раздел
          </div>
          <ArrowRight />
          <div className="w-[25%]">
            <img src="m6/instruction/tablet/5.webp" alt="" className='w-full'/>
            Войди в раздел “Аккаунт”
          </div>
          <ArrowRight />
          <div className="w-1/4">
            <img src="m6/instruction/tablet/6.webp" alt="" className='w-full'/>
            Введи тот логин и пароль, который вводил на сайте
          </div>
        </div>
      </div>
      <img src="m6/instruction/shared/kid.webp" alt="" className='mt-4'/>
      <h3 className='text-2xl mt-4'>Наслаждайся игрой!</h3>
    </div>
  );
};

export default Instruction;