import Link from "next/link";
import React from "react";

const SavedList = () => {
  return (
    <div className="tab-content bg-base-100 border-base-300 p-6">
      <div className="hero border border-dashed border-[#1A1D24] rounded-2xl bg-[#0E1015]/40 min-h-[380px] p-8">
        <div className="hero-content text-center flex-col p-0 max-w-md gap-5">
          <div className="space-y-2">
            <h2 className="text-2xl font-black tracking-tight uppercase text-white">
              Nothing Here Yet
            </h2>
            <p className="text-[#8B8D90] text-sm font-medium max-w-sm">
              Browse the library and add a lift to get today moving.
            </p>
          </div>

          <div>
            {/* daisyUI Action element enhanced with neon configurations */}
            <button className="btn bg-[#fa1010] text-[#0B0D12] hover:bg-[#a2e60e] font-black text-xs uppercase tracking-wider border-none px-6 rounded-full shadow-[0_4px_20px_rgba(177,250,16,0.15)] min-h-0 h-11">
              <Link href="/">Go to workouts</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SavedList;
