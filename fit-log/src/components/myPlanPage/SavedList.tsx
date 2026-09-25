"use client";
import { WorkoutContext } from "@/context/WorkoutsContext";
import { useContext } from "react";
import ListItem from "./ListItem";
import EmptyList from "./EmptyList";

const SavedList = () => {
  const workoutProvider = useContext(WorkoutContext);
  if (!workoutProvider) {
    throw new Error("There is No workoutProvider");
  }
  const { savedList, setSavedlist } = workoutProvider;
  return (
    <div className="tab-content bg-base-100 border-base-300 p-6">
      {savedList.length > 0 ? (
        savedList.map((workout) => (
          <ListItem key={workout.id} workout={workout}></ListItem>
        ))
      ) : (
        <EmptyList></EmptyList>
      )}
    </div>
  );
};

export default SavedList;
