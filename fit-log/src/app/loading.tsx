import React from "react";
import { ImSpinner2 } from "react-icons/im";

const loading = () => {
  return (
    <div className="bg-[#0B0D12] min-h-screen text-white flex flex-col items-center justify-center space-y-4">
      {/* Smoothly animated neon spinner */}
      <div className="relative flex items-center justify-center">
        <span className="animate-spin text-[#B1FA10]">
          <ImSpinner2 size={40} color="#B1FA10" />
        </span>
      </div>

      {/* Loading descriptive text */}
      <div className="text-center space-y-1">
        <p className="text-xs font-black uppercase tracking-[0.2em] text-white">
          Loading Library
        </p>
        <p className="text-[#8B8D90] text-[11px] font-medium">
          Fetching data...
        </p>
      </div>
    </div>
  );
};

export default loading;
