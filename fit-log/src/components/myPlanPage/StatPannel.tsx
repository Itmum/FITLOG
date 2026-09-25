import React from "react";

const StatPannel = () => {
  return (
    <div className="bg-[#111317] border border-[#1A1D24] rounded-2xl p-6 md:p-8 grid grid-cols-3 gap-4 items-center">
      {/* Exercises Column */}
      <div className="space-y-1">
        <p className="text-[#8B8D90] text-xs font-bold uppercase tracking-wider">
          Exercises
        </p>
        <span className="text-4xl md:text-5xl font-black text-[#B1FA10] block leading-none">
          2
        </span>
      </div>

      {/* Minutes Column */}
      <div className="space-y-1 border-x border-[#1A1D24]/60 px-4 md:px-8">
        <p className="text-[#8B8D90] text-xs font-bold uppercase tracking-wider">
          Minutes
        </p>
        <span className="text-4xl md:text-5xl font-black text-white block leading-none">
          23
        </span>
      </div>

      {/* Calories Column */}
      <div className="space-y-1 pl-2 md:pl-4">
        <p className="text-[#8B8D90] text-xs font-bold uppercase tracking-wider">
          Calories
        </p>
        <span className="text-4xl md:text-5xl font-black text-white block leading-none">
          190
        </span>
      </div>
    </div>
  );
};

export default StatPannel;
