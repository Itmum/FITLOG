"use client";
import { IWorkout } from "@/types/workout.type";
import React, { createContext, useState } from "react";
interface IWorkoutContext {
  planList: IWorkout[];
  setPlanList: React.Dispatch<React.SetStateAction<IWorkout[]>>;
  savedList: IWorkout[];
  setSavedlist: React.Dispatch<React.SetStateAction<IWorkout[]>>;
}
export const WorkoutContext = createContext<IWorkoutContext | undefined>(
  undefined,
);
const WorkoutsProvider = ({ children }: { children: React.ReactNode }) => {
  const [planList, setPlanList] = useState<IWorkout[]>([]);
  const [savedList, setSavedlist] = useState<IWorkout[]>([]);
  const sharedData = { planList, setPlanList, savedList, setSavedlist };
  return (
    <WorkoutContext.Provider value={sharedData}>
      {children}
    </WorkoutContext.Provider>
  );
};

export default WorkoutsProvider;
