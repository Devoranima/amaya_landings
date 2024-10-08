import React from "react";

const Rewards = () => {
  return (
    <div className="w-ful mt-20 relative z-20">
      <div className="lg:container lg:rounded-3xl flex flex-col items-center justify-between bg-white py-10 px-2 md:px-10 lg:py-12">
        <h2 className="text-slate-700 font-fut text-3xl lg:text-4xl w-full lg:w-auto  text-center lg:text-start lg:leading-tight">Наши награды и упоминания в СМИ</h2>
        <div className="mt-10 max-w-full lg:max-w-none">
          <img src="companies.webp" alt="" className=""/>
        </div>
      </div>
    </div>
  );
};

export default Rewards;