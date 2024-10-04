import Section from '@components/Section/Section';
import Header from '@components/Section/Header';
import Body from '@components/Section/Body';
import { FaStar } from 'react-icons/fa6';
import { RiDoubleQuotesL } from 'react-icons/ri';

const Reviews = () => {
  return (
    <Section className="pt-40 mb-0 z-10 bg-[url('BG.svg')] bg-cover">
      <Body className='relative z-10 mb-20'>
        <Header className='text-white'>Более 3 000 000 счастливых родителей по всему миру</Header>
        <div className="w-full">
          <Review review={review}/>
        </div>
      </Body>
      <img src="amaya/Kids.webp" alt="" className='relative w-full z-20 0'/>

      {/*<BgFigure/>*/}
    </Section>
  );
};

export default Reviews;

type T_Review = {
  image: string;
  text: string;
  name: string;
  rating: number;
}

const review: T_Review = {
  image: "apps/mobile/Dino.webp",
  text: "Это лучшая игра! Дочке два года, она в восторге. Купили весь сборник. Оказалось еще и полезно, она узнала много нового!",
  name: "CandyCandy",
  rating: 5
}

const Review = ({review}:{review: T_Review}) => {

  return (
    <div className="bg-white rounded-2xl p-1 flex flex-row items-center lg:w-2/3">
      <img src={review.image} alt="" className='w-1/3'/>
      <div className="w-full flex flex-col p-4">
        <div className="w-full flex flex-row justify-between items-center">
          <RiDoubleQuotesL className='text-6xl text-[#f47e12]'/>
          <div className="flex flex-row items-center">
            {[...Array(review.rating)].map((_, index)=>
            <FaStar key={index} className='text-yellow-500 text-3xl'/>)}
          </div>
        </div>
        <div className="text-xl font-sans font-semibold">
          {review.text}
        </div>
        <div className="text-right text-2xl">
          {review.name}
        </div>
      </div>
    </div>
  )
}