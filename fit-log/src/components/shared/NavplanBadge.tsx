import { WorkoutContext } from "@/context/WorkoutsContext";
import React, { useContext } from "react";
import SavedList from "../myPlanPage/SavedList";

const NavplanBadge = () => {
  const workoutProvider = useContext(WorkoutContext);
  if (!workoutProvider) {
    throw new Error("There is not workoutProvider");
  }
  const { planList } = workoutProvider;

  return (
    <div className="w-5 h-5 rounded-full bg-[#B1FA10] text-[#0B0D12] text-xs font-bold flex items-center justify-center">
      {planList.length > 9 ? `9+` : `${planList.length}`}
    </div>
  );
};

export default NavplanBadge;
