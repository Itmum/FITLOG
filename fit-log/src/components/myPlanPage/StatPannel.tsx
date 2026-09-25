"use client";
import { TabContext } from "@/context/TabContext";
import { WorkoutContext } from "@/context/WorkoutsContext";
import { useContext } from "react";

const StatPannel = () => {
  const tabProvider = useContext(TabContext);
  const workoutProvider = useContext(WorkoutContext);
  if (!tabProvider || !workoutProvider) {
    throw new Error("There are no tabProvider or workoutProvider");
  }
  const { activeTab } = tabProvider;
  const { planList, setPlanList, savedList, setSavedlist } = workoutProvider;

  const totalDuration = (tab: "saved" | "plan") => {
    if (tab === "saved") {
      return savedList.reduce((acc, item) => {
        return acc + item.duration;
      }, 0);
    } else {
      return planList.reduce((acc, item) => {
        return acc + item.duration;
      }, 0);
    }
  };

  const totalCal = (tab: "saved" | "plan") => {
    if (tab === "saved") {
      return savedList.reduce((acc, item) => {
        return acc + item.caloriesBurned;
      }, 0);
    } else {
      return planList.reduce((acc, item) => {
        return acc + item.caloriesBurned;
      }, 0);
    }
  };
  return (
    <div className="bg-[#111317] border border-[#1A1D24] rounded-2xl p-6 md:p-8 grid grid-cols-3 gap-4 items-center">
      <div className="space-y-1">
        <p className="text-[#8B8D90] text-xs font-bold uppercase tracking-wider">
          Exercises
        </p>
        <span className="text-4xl md:text-5xl font-black text-[#B1FA10] block leading-none">
          {activeTab === "plan" ? `${planList.length}` : `${savedList.length}`}
        </span>
      </div>

      <div className="space-y-1 border-x border-[#1A1D24]/60 px-4 md:px-8">
        <p className="text-[#8B8D90] text-xs font-bold uppercase tracking-wider">
          Minutes
        </p>
        <span className="text-4xl md:text-5xl font-black text-white block leading-none">
          {totalDuration(activeTab)}
        </span>
      </div>

      <div className="space-y-1 pl-2 md:pl-4">
        <p className="text-[#8B8D90] text-xs font-bold uppercase tracking-wider">
          Calories
        </p>
        <span className="text-4xl md:text-5xl font-black text-white block leading-none">
          {totalCal(activeTab)}
        </span>
      </div>
    </div>
  );
};

export default StatPannel;
