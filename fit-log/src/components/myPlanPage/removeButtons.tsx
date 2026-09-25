"use client";
import { TabContext } from "@/context/TabContext";
import { WorkoutContext } from "@/context/WorkoutsContext";
import { IWorkout } from "@/types/workout.type";
import React, { useContext } from "react";
import { FaCheck } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { toast } from "react-toastify";

const RemoveButtons = ({ workout }: { workout: IWorkout }) => {
  const tabProvider = useContext(TabContext);
  const workoutProvider = useContext(WorkoutContext);
  if (!tabProvider || !workoutProvider) {
    throw new Error("There are no tabProvider or workoutProvider");
  }
  const { activeTab } = tabProvider;
  const { planList, setPlanList, savedList, setSavedlist } = workoutProvider;
  const handleremovebuttons = (btn: "remove" | "done") => {
    if (activeTab === "plan") {
      const updatedList = planList.filter((item) => item.id !== workout.id);
      setPlanList(updatedList);
      if (btn === "remove") {
        toast.error(`Removed ${workout.name} from your ${activeTab} list`);
      } else {
        toast.success(
          `Succesfully Finished ${workout.name} from your ${activeTab}`,
        );
      }
    } else if (activeTab === "saved") {
      const updatedList = savedList.filter((item) => item.id !== workout.id);
      setSavedlist(updatedList);
      if (btn === "remove") {
        toast.error(`Removed ${workout.name} from your ${activeTab} list`);
      } else {
        toast.success(
          `Succesfully Finished ${workout.name} from your ${activeTab}`,
        );
      }
    } else {
      return;
    }
  };

  //   console.log("Plant list: ", planList, "  |saved List: ", savedList);
  return (
    <div className="flex flex-col min-[380px]:flex-row items-center justify-center">
      {/* Neon Mark As Done Button */}
      <button
        onClick={() => handleremovebuttons("done")}
        className="btn btn-xs sm:btn-xs bg-[#B1FA10] hover:bg-[#a2e60e] text-[#0B0D12] text-[11px] sm:text-xs font-black uppercase tracking-wider rounded-full border-none px-3 sm:px-4 h-8 sm:h-9 min-h-0 flex items-center justify-center gap-1 sm:gap-1.5 shadow-[0_4px_12px_rgba(177,250,16,0.15)] cursor-pointer"
      >
        <FaCheck className="text-[10px] sm:text-xs stroke-[2px]" />
        <span>Mark as Done</span>
      </button>

      {/* Plan Dismiss Cross Icon (Always explicitly inline at the end of the line) */}
      <button
        onClick={() => handleremovebuttons("remove")}
        className="text-[#4A4E57] hover:text-rose-400 p-1 sm:p-1.5 rounded-lg transition-colors cursor-pointer ml-1 sm:ml-0"
        aria-label="Remove item"
      >
        <IoClose className="w-5 h-5" />
      </button>
    </div>
  );
};

export default RemoveButtons;
