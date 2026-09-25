import { IWorkout } from "@/types/workout.type";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaCheck, FaRegClock, FaRegStar } from "react-icons/fa";
import { FaFireFlameCurved } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";

const ListItem = ({ workout }: { workout: IWorkout }) => {
  return (
    <div className="bg-[#111317] border border-[#1A1D24] rounded-2xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 w-full mb-4 hover:border-[#2A303C] transition-colors">
      {/* Left Section: Image and Content Telemetry Area */}
      <div className="flex items-center gap-4 min-w-0">
        {/* Exercise Thumbnail Frame */}
        <div className="relative w-20 h-14 sm:w-24 sm:h-16 rounded-xl overflow-hidden bg-[#181B22] flex-shrink-0 border border-[#1A1D24]">
          <Image
            src={workout?.image || "/placeholder.png"}
            alt={workout?.name || "Exercise cover"}
            fill
            sizes="(max-w-640px) 80px, 96px"
            className="object-cover object-center"
          />
        </div>

        {/* Metadata Nomenclature */}
        <div className="min-w-0">
          <h3 className="text-sm sm:text-base font-black uppercase tracking-tight text-white leading-tight truncate">
            {workout?.name || "Russian Twist"}
          </h3>
          <p className="text-[#8B8D90] text-xs font-semibold truncate mt-0.5">
            {Array.isArray(workout?.equipment)
              ? workout.equipment.join(", ")
              : workout?.equipment || "Medicine Ball"}
          </p>

          {/* Metric Telemetry Badges Strip */}
          <div className="flex flex-wrap items-center gap-x-3 gap-y-0.5 pt-1 text-[#8B8D90] text-[11px] font-bold">
            <div className="flex items-center gap-1 whitespace-nowrap">
              <FaRegClock className="text-[#B1FA10] w-3 h-3" />
              <span>{workout?.duration || "8"} min</span>
            </div>
            <div className="flex items-center gap-1 whitespace-nowrap">
              <FaFireFlameCurved className="text-[#B1FA10] w-3 h-3" />
              <span>
                {workout?.caloriesBurned || workout?.caloriesBurned || "70"}{" "}
                kcal
              </span>
            </div>
            <div className="flex items-center gap-1 whitespace-nowrap">
              <FaRegStar className="text-[#B1FA10] w-3 h-3" />
              <span>{workout?.rating?.toFixed(1) || "4.1"}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section: View Details, Mark As Done, and Close Control (Stays in order) */}
      <div className="flex flex-col min-[380px]:flex-row  items-center justify-between sm:justify-end gap-2 sm:gap-3 w-full sm:w-auto border-b border-[#1A1D24]/50 sm:border-none pb-3 sm:pb-0">
        {/* View Details Link */}
        <Link
          href={`/workouts/${workout?.id || "#"}`}
          className="btn btn-xs sm:btn-xs btn-ghost border border-[#232730] text-gray-300 hover:text-white hover:bg-[#1C2026] text-[11px] sm:text-xs font-bold uppercase tracking-wider rounded-full px-3 sm:px-4 h-8 sm:h-9 min-h-0 flex items-center justify-center"
        >
          View Details
        </Link>

        {/* Neon Mark As Done Button */}
        <button className="btn btn-xs sm:btn-xs bg-[#B1FA10] hover:bg-[#a2e60e] text-[#0B0D12] text-[11px] sm:text-xs font-black uppercase tracking-wider rounded-full border-none px-3 sm:px-4 h-8 sm:h-9 min-h-0 flex items-center justify-center gap-1 sm:gap-1.5 shadow-[0_4px_12px_rgba(177,250,16,0.15)] cursor-pointer">
          <FaCheck className="text-[10px] sm:text-xs stroke-[2px]" />
          <span>Mark as Done</span>
        </button>

        {/* Plan Dismiss Cross Icon (Always explicitly inline at the end of the line) */}
        <button
          className="text-[#4A4E57] hover:text-rose-400 p-1 sm:p-1.5 rounded-lg transition-colors cursor-pointer ml-1 sm:ml-0"
          aria-label="Remove item"
        >
          <IoClose className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default ListItem;
