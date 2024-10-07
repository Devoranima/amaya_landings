import Section from '@components/Section/Section';
import Header from '@components/Section/Header';
import Body from '@components/Section/Body';
import CTA from './CTA';


const JoinUs = () => {
  return (
    <Section>
      <Header className='text-4xl md:text-6xl '>
        Присоединяйтесь к Amaya+!
      </Header>
      <Body className='mt-10'>
        <h2 className='text-2xl leading-snug font-sans font-semibold text-center'>
          Готовы сделать игры увлекательными и развивающими
          для своего ребёнка? <br />
          Присоединяйтесь к нашему растущему сообществу
          родителей и детей уже сегодня!
        </h2>
        <div className="w-full mt-28 px-2 lg:px-6 lg:w-1/2 mx-auto">
          <div className="relative">
            <div className="absolute -translate-x-1/2 -translate-y-full left-1/2 top-0 w-4/5 text-center text-white bg-red-500 rounded-tl-3xl rounded-tr-3xl text-2xl md:text-3xl font-semibold py-2">
              Специальное предложение!
            </div>
            <div className="w-full outline outline-2 outline-accent shadow-xl rounded-[3rem] py-10 text-center bg-white relative">
              <h3 className="text-accent text-5xl md:text-6xl font-black mb-4">Навсегда</h3>
              <h4 className="text-3xl md:text-4xl font-bold">$14.99 one time</h4>
              <h4 className="text-2xl md:text-3xl font-bold text-gray-400 mb-8 line-through">$79.99</h4>
              <CTA className='max-w-[98%] md:max-w-fit mx-auto'>Попробовать</CTA>
              <img src="tag.webp" alt="" className="w-[15%] absolute top-2 right-[15%] translate-x-full" />
              <img src="amaya/index/shared/bird.webp" alt="" className='absolute -left-2 lg:-left-80 -top-8 lg:top-0 w-1/4' />
              <img src="amaya/index/tablet/confetti.webp" alt="" className='hidden lg:block absolute -right-80 top-1/2 -translate-y-1/2' /> 
            </div>
          </div>
        </div>
      </Body>
    </Section>
  );
};

export default JoinUs;