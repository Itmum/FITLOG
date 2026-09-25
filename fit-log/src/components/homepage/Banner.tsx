import React from "react";
import heroImage from "@/assets/banner.png";
import Image from "next/image";
import Link from "next/link";

const Banner = () => {
  return (
    <div className="bg-[#0B0D12] min-h-screen px-4 py-8 flex items-center justify-center">
      <div className="bg-[#111317] border border-[#1A1D24] rounded-3xl container mx-auto  p-8 md:p-16 flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
        <div className="flex-1 text-left space-y-6 ">
          <span className="text-[#B1FA10] text-xs font-black tracking-[0.2em] uppercase block">
            Workout Library
          </span>

          <h1 className="text-4xl md:text-5xl lg:text-[56px] font-black uppercase text-white leading-[1.1] tracking-tight font-sans">
            Train With Intent. <br className="hidden sm:inline" />
            Log Every Set.
          </h1>

          <p className="text-[#8B8D90] text-sm md:text-base font-normal leading-relaxed max-w-md">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into today&apos;s plan, and watch the week&apos;s work add up.
          </p>

          <div className="pt-2">
            <a
              href="#workouts"
              className="bg-[#B1FA10] text-[#0B0D12] hover:bg-[#a2e60e] font-black text-xs uppercase tracking-wider px-6 py-3.5 rounded-lg transition-colors cursor-pointer shadow-md"
            >
              Browse Workouts
            </a>
          </div>
        </div>

        <div className="flex-1 flex justify-center items-center w-full max-w-sm md:max-w-md lg:max-w-md">
          <Image
            src={heroImage}
            alt="Anatomy model performing preacher curls on a fitness machine"
            priority
            className="w-full h-auto object-contain object-center drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)]"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
