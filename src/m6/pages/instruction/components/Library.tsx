import { Swiper, SwiperSlide } from "swiper/react";

const Library = () => {
  return (
    <div className='w-full bg-blu py-10 font-fut'>
      <div className="container flex flex-col items-center mb-10">
        <div className="text-4xl text-white text-center">Download and start your Journey!</div>
      </div>
      
      <div className="pointer-events-none">
        <Slider index={1}/>
        <div className="xl:hidden">
          <Slider index={5} offset={100}/>
        </div>
        <div className="2xl:hidden">
          <Slider index={8}/>
        </div>
      </div>

      <a className="block mx-auto w-80 border-none outline-none p-0 mt-10">
        <img src="AppStore.webp" alt="" />
      </a>
    </div>
  );
};


const getSlidesPerView = (breakpoint: string) => {
  switch (breakpoint) {
    case 'sm':
      return 2;
    case 'md':
      return 3;
    case 'lg':
      return 4;
    case 'xl':
      return 5;
    case '2xl':
      return 6;
    default:
      return 4; // Default to 4 if no breakpoint matches
  }
};

const Slider = ({index, offset}:{index: number, offset?: number}) => {
  const items = [];

  for (let i = 1; i < 19; i++) {
    items.push(
      <SwiperSlide className="w-1/2 md:w-1/3 lg:w-1/4" key={`slide-${Math.random()}`}>
        <img 
          src={`m6/instruction/shared/Game${i}.webp`} alt="" 
          className="w-full h-full object-cover" 
        />
      </SwiperSlide>
    );
  }
  
  return(
    <Swiper
    spaceBetween={20}
    slidesPerView={2}
    autoplay={{
      delay:1,
      disableOnInteraction: false,
      pauseOnMouseEnter: false,
      waitForTransition: true,
    }}
    speed={20000}
    loop
    breakpoints={{
      640: { slidesPerView: getSlidesPerView('sm')},
      768: { slidesPerView: getSlidesPerView('md')},
      1024: { slidesPerView: getSlidesPerView('lg')},
      1280: { slidesPerView: getSlidesPerView('xl')},
      1536: { slidesPerView: getSlidesPerView('2xl')},
    }}
    slidesOffsetBefore={offset??0}
    initialSlide={index}
    className="my-4"
  >
      {items}
    </Swiper>
  )
}

export default Library;