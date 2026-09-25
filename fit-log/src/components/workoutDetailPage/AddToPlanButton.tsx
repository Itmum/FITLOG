"use client";
import { WorkoutContext } from "@/context/WorkoutsContext";
import { IWorkout } from "@/types/workout.type";
import React, { useContext } from "react";
import { FaCalendarPlus } from "react-icons/fa";
import { toast } from "react-toastify";

const AddToPlanButton = ({ workout }: { workout: IWorkout }) => {
  const workoutProvider = useContext(WorkoutContext);
  if (!workoutProvider) {
    throw new Error("WorkoutContext is not available");
  }
  const { planList, setPlanList } = workoutProvider;
  const isAlreadyAdded = planList.some((i) => i.id === workout.id);
  const handleAddToPlanButton = () => {
    if (isAlreadyAdded) {
      toast.error(`${workout.name} is Already in your plan`);
      //   alert(`${workout.name} is Already in your plan`);
      return;
    }
    setPlanList([...planList, workout]);
    toast.success(`${workout.name} is successfully added to your Plan`);
  };
  console.log("add to plan clicked, udated planList = ", planList);
  return (
    <button
      onClick={handleAddToPlanButton}
      className="flex items-center gap-2 bg-[#B1FA10] text-[#0B0D12] hover:bg-[#a2e60e] font-black text-xs uppercase tracking-wider px-5 py-3 rounded-xl transition-colors cursor-pointer shadow-md"
    >
      <span className="text-base">
        <FaCalendarPlus />
      </span>
      Add to today&apos;s plan
    </button>
  );
};

export default AddToPlanButton;
