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

      <div className="w-full z-10 relative">
      
        <div className='container mx-auto text-center py-8 text-xl text-slate-300'>
        © 2024, Amaya Kids World | Все права защищены
        </div>
      </div>
    </div>
  )
}