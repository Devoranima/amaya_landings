import{ StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
// register Swiper custom elements
register();


/*//!Specify which site and page you want to render

  Чтобы не нагружать проект рутингом и прочей ненужной ерундой, я оставил переключение рендеринга нужной страницы вручную

  Во время билда он сам скомпилирует только нужные файлы и добавит их в сборку
*/


//? Входные файлы для страниц
//import App from './moreapps/pages/index/App'
//import App from './moreapps/pages/instruction/App'
import App from './m6/pages/index/App'
//import App from './m6/pages/instruction/App'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <App/>
  </StrictMode>,
)
