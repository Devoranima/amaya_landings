import React from "react";

const Rewards = () => {
  return (
    <div className="w-full bg-white lg:bg-transparent mt-20 relative z-20">
      <div className="container lg:max-w-[50%] rounded-3xl flex flex-col items-center justify-between lg:flex-row lg:bg-white py-20 px-2 lg:px-10 lg:py-20">
        <h2 className="text-accent font-fut text-4xl md:text-6xl w-full text-center lg:text-start lg:leading-tight">Наши награды и упоминания в СМИ</h2>
        <img src="companies.webp" alt="" className="mt-10 lg:mt-0 lg:pl-10 max-w-full"/>
      </div>
    </div>
  );
};

export default Rewards;