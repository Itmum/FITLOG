import { IWorkout } from "@/types/workout.type";
import Image from "next/image";
import React from "react";
// Importing matching React Icons
import WorkoutCard from "../shared/WorkoutCard";
import Link from "next/link";

const getWorkoutLibrary = async () => {
  const res = await fetch("https://api.abcz.workers.dev/api/fitlog");
  const library = await res.json();
  return library;
};

const WorkoutLibrary = async () => {
  const libraryData = await getWorkoutLibrary();

  return (
    <div className="bg-[#0B0D12] text-white py-12 px-4 min-h-screen">
      <div className="container mx-auto">
        {/* Header Metadata Block */}
        <div className="mb-8 space-y-1">
          <h1 className="text-3xl font-black tracking-tight uppercase">
            The Library
          </h1>
          <p className="text-[#8B8D90] text-sm">
            Twelve lifts covering every major muscle group.
          </p>
        </div>

        <div
          id="workouts"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {libraryData.map((workout: IWorkout) => {
            return (
              <Link href={`/workouts/${workout.id}`} key={workout.id}>
                <WorkoutCard workout={workout}></WorkoutCard>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WorkoutLibrary;
