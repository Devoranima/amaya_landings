import Section from '@components/Section/Section';
import Header from '@components/Section/Header';
import Body from '@components/Section/Body';
import CTA from './CTA';


const JoinUs = () => {
  return (
    <Section>
    <Header className='mb-10'>
    Присоединяйтесь к Amaya+!
    </Header>
    <Body>
      <h2 className='text-2xl font-sans font-semibold text-center mb-10'>Готовы сделать игры увлекательными и развивающими
  для своего ребёнка? <br />Присоединяйтесь к нашему растущему сообществу
  родителей и детей уже сегодня!
    </h2>
      <div className="w-full px-10 lg:max-w-1/2">
        <div className="w-full flex flex-col items-center">
          <div className="w-2/3 sm:w-auto lg:w-min xl:w-auto text-center text-white bg-red-500 rounded-tl-3xl rounded-tr-3xl text-2xl font-semibold py-2 px-6">
            Специальное предложение!
          </div>
          <div className="w-full lg:w-1/2 outline outline-2 outline-slate-300 shadow-xl rounded-[3rem] py-6 px-4 sm:p-10 text-center bg-white relative">
            <h3 className="text-accent text-5xl font-black mb-4">Навсегда</h3>
            <h4 className="text-3xl font-bold">$14.99 one time</h4>
            <h4 className="text-2xl font-bold text-gray-400 mb-8 line-through">$79.99</h4>
            <CTA className='px-10 lg:px-16 text-xl'>Попробовать</CTA>
            <img src="tag.webp" alt="" className="w-1/6 absolute top-2 right-2 translate-x-1/2"/>
          </div>
        </div>
      </div>
    </Body>
    </Section>
  );
};

export default JoinUs;