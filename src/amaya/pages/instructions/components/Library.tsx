import CTA from "@/amaya/components/CTA";
import { Swiper, SwiperSlide } from "swiper/react";

const Library = () => {

  return (
    <div className='w-full bg-white py-10 font-fut'>
      <div className="container flex flex-col items-center mb-10">
        <div className="px-2 md:px-0 flex flex-row items-center justify-around w-full">
          <img src="amaya/instruction/shared/library.webp" alt="" className="w-1/4 md:w-[120px] lg:w-[150px] aspect-square"/>
          <div className="ml-2 lg:ml-0 text-xl text-main w-3/4 lg:w-auto lg:text-3xl">Open any of our apps and go to the <span className="text-accent">Library </span>
          to download 25+ other amazing apps!</div>
        </div>
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

      <CTA className="mt-20 mx-auto max-w-fit">Let's go!</CTA>
    </div>
  );
};

export default Library;

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

  for (let i = 1; i < 11; i++) {
    items.push(
      <SwiperSlide className="w-1/2 md:w-1/3 lg:w-1/4" key={`slide-${Math.random()}`}>
        <img 
          src={`amaya/instruction/shared/Game${i}.webp`} alt="" 
          className="w-full h-full object-cover" 
        />
      </SwiperSlide>
    );
  }
  
  return(
    <Swiper
    spaceBetween={10}
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
    className="my-2"
  >
      {items}
    </Swiper>
  )
}