const Rewards = () => {
  return (
    <div className="w-full bg-white lg:bg-transparent relative z-20">
      <div className="container lg:max-w-[50%] lg:rounded-3xl flex flex-row items-center justify-between lg:flex-col lg:bg-white py-20 px-2 md:px-0 lg:p-6">
        <h2 className="text-accent font-fut text-2xl sm:text-4xl w-1/3 sm:w-1/2 lg:w-full lg:text-center lg:mb-10">Наши награды и упоминания в СМИ</h2>
        <img src="companies.webp" alt="" className="w-1/2 sm:w-2/5 lg:w-auto max-w-lg"/>
      </div>
    </div>
  );
};

export default Rewards;