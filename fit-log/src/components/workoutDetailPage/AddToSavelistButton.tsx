"use client";
import { WorkoutContext } from "@/context/WorkoutsContext";
import { IWorkout } from "@/types/workout.type";
import React, { useContext } from "react";
import { FaRegBookmark } from "react-icons/fa";
import { toast } from "react-toastify";

const AddToSavelistButton = ({ workout }: { workout: IWorkout }) => {
  const workoutProvider = useContext(WorkoutContext);
  if (!workoutProvider) {
    throw new Error("WorkoutContext is not available");
  }
  const { savedList, setSavedlist } = workoutProvider;
  const isAlreadyAdded = savedList.some((i) => i.id === workout.id);
  const handleAddToPlanButton = () => {
    if (isAlreadyAdded) {
      toast.error(`${workout.name} is Already in your Saveed List`);
      //   alert(`${workout.name} is Already in your plan`);
      return;
    }
    setSavedlist([...savedList, workout]);
    toast.success(`${workout.name} is successfully Saved`);
  };
  console.log("add to savelist clicked, udated save list = ", savedList);
  return (
    <button
      onClick={handleAddToPlanButton}
      className="flex items-center gap-2 bg-[#111317] hover:bg-[#1A1D24] text-gray-300 hover:text-white border border-[#1A1D24] font-black text-xs uppercase tracking-wider px-5 py-3 rounded-xl transition-colors cursor-pointer"
    >
      <span className="text-base">
        <FaRegBookmark />
      </span>
      Save for later
    </button>
  );
};

export default AddToSavelistButton;
