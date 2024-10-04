import Head from "./components/Head";
import Hero from "./components/Hero";
import "../../App.css";
import Instruction from "./components/Instruction";
import Library from "./components/Library";

export default function App() {
  return (
    <div className="min-h-screen w-screen bg-[#f4f5ff] overflow-hidden">
      <Head/>
      <Hero/>
      <Instruction/>
      <Library/>
      <Footer/>
    </div>
  )
}


const Footer = () => {
  return (
    <div className="w-full">

      <div className="bg-gradient-to-r from-[#f87413] via-[#ffa13d] to-[#f87413] w-full z-10 relative flex flex-col items-center  py-8">
        <img className='h-16 drop-shadow-xl' src="amaya/Logo_inverse.webp" alt="" />
        <div className='container mx-auto text-center text-xl mt-4'>
        © 2024, Amaya+ | Все права защищены
        </div>
      </div>
    </div>
  )
}