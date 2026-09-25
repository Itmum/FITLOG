import { IWorkout } from "@/types/workout.type";
import Image from "next/image";
import React from "react";
import { FaRegClock, FaRegStar } from "react-icons/fa";
import { FaFireFlameCurved } from "react-icons/fa6";

const WorkoutCard = ({ workout }: { workout: IWorkout }) => {
  return (
    <div
      key={workout.id}
      className="bg-[#111317] border border-[#1A1D24] rounded-2xl overflow-hidden flex flex-col group hover:border-[#2A303C] transition-colors"
    >
      {/* Visual Canvas Block */}
      <div className="relative aspect-[16/10] w-full bg-[#181B22]">
        <Image
          src={workout.image}
          alt={workout.name || "Workout image"}
          fill
          sizes="(max-w-768px) 100vw, (max-w-1200px) 50vw, 33vw"
          priority
          className="object-cover object-center group-hover:scale-[1.02] transition-transform duration-300"
        />
      </div>

      {/* Information Descriptor Body */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-3">
          {/* Dynamic Tag Track */}
          <div className="flex flex-wrap gap-1.5">
            {workout.muscleGroups?.map((tag: string, index: number) => (
              <span
                key={index}
                className="bg-[#B1FA10] text-[#0B0D12] text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Exercise Nomenclature & Subtitles */}
          <div className="space-y-0.5">
            <h2 className="text-lg font-black uppercase tracking-tight text-white leading-tight">
              {workout.name}
            </h2>
            <p className="text-[#8B8D90] text-xs font-medium">
              {Array.isArray(workout.equipment)
                ? workout.equipment.join(", ")
                : workout.equipment || "Bodyweight"}
            </p>
          </div>
        </div>

        {/* Horizontal Divider Line & Footer Telemetry */}
        <div className="border-t border-[#1A1D24] pt-3 flex items-center justify-between text-[#8B8D90] text-xs font-semibold">
          {/* Time Metric */}
          <div className="flex items-center gap-1.5">
            <FaRegClock size={14} color="#8B8D90" />
            <span>{workout.duration || "20"} min</span>
          </div>

          {/* Calorie Burn Metric */}
          <div className="flex items-center gap-1.5">
            <FaFireFlameCurved size={14} color="#8B8D90" />
            <span>{workout.caloriesBurned || "150"} kcal</span>
          </div>

          {/* Rating Telemetry */}
          <div className="flex items-center gap-1.5">
            <FaRegStar size={14} color="#8B8D90" />
            <span>{workout.rating?.toFixed(1) || "4.5"}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkoutCard;
