import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
//import AmayaIndex from './amaya/pages/index/App'
import AmayaInstructions from './amaya/pages/instructions/App'
//import M6Index from './m6/pages/index/App'
//import M6Instructions from './m6/pages/instructions/App'


// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
// register Swiper custom elements
register();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AmayaInstructions/>
    {/*<M6Instructions/>*/}
    {/*<AmayaIndex/>*/}
  </StrictMode>,
)
