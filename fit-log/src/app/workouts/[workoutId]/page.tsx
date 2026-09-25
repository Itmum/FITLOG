import { IWorkout } from "@/types/workout.type";
import Image from "next/image";
import React from "react";
// Importing the precise React Icons shown in your design image
import { FaCalendarPlus, FaRegBookmark } from "react-icons/fa6";

interface workoutDetailPageProps {
  params: Promise<{ workoutId: string }>;
}

const getWorkoutLibrary = async () => {
  const res = await fetch("https://api.abcz.workers.dev/api/fitlog", {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error(`API responded with status: ${res.status}`);
  }
  const library = await res.json();
  return library;
};

const WorkoutDetailPage = async ({ params }: workoutDetailPageProps) => {
  const { workoutId } = await params;
  const allWorkouts = await getWorkoutLibrary();

  const workout: IWorkout = allWorkouts.find((i: IWorkout) => {
    return Number(i.id) === Number(workoutId);
  });

  if (!workout) {
    return (
      <div className="bg-[#0B0D12] min-h-screen text-center flex items-center justify-center text-white">
        <p className="text-[#8B8D90]">Workout details could not be found.</p>
      </div>
    );
  }

  return (
    <div className="bg-[#0B0D12] text-white min-h-screen py-10 px-4 md:px-8 flex items-center justify-center">
      <div className="container mx-auto  flex flex-col md:flex-row gap-10 items-stretch">
        {/* Left Aspect: Workout Image Box */}
        <div className="flex-1 relative aspect-square md:aspect-auto min-h-[350px] md:min-h-[500px] w-full rounded-2xl overflow-hidden bg-[#181B22]">
          <Image
            src={workout.image}
            alt={workout.name || "Workout image"}
            fill
            priority
            sizes="(max-w-768px) 100vw, 50vw"
            className="object-cover object-center"
          />
        </div>

        {/* Right Aspect: Metadata Panels & Details */}
        <div className="flex-1 flex flex-col justify-between space-y-6">
          {/* Header Typography Group */}
          <div className="space-y-3">
            <h1 className="text-3xl md:text-4xl font-black tracking-tight uppercase leading-none">
              {workout.name}
            </h1>
            <p className="text-[#8B8D90] text-sm leading-relaxed">
              {workout.description ||
                "A compound press that builds chest thickness, triceps, and pressing power from a stable bench."}
            </p>

            {/* Dynamic Pill Tags */}
            <div className="flex flex-wrap gap-2 pt-1">
              {workout.muscleGroups?.map((tag: string, idx: number) => (
                <span
                  key={idx}
                  className="bg-[#B1FA10] text-[#0B0D12] text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Matrix Specifications List */}
          <div className="border-y border-[#1A1D24] divide-y divide-[#1A1D24]/50 text-sm">
            <div className="flex justify-between py-2.5">
              <span className="text-[#8B8D90] uppercase font-bold text-xs tracking-wider">
                Equipment
              </span>
              <span className="font-semibold text-white">
                {Array.isArray(workout.equipment)
                  ? workout.equipment.join(", ")
                  : workout.equipment || "Barbell, Bench"}
              </span>
            </div>

            <div className="flex justify-between py-2.5">
              <span className="text-[#8B8D90] uppercase font-bold text-xs tracking-wider">
                Difficulty
              </span>
              <span className="font-semibold text-white">
                {workout.difficulty || "Intermediate"}
              </span>
            </div>

            <div className="flex justify-between py-2.5">
              <span className="text-[#8B8D90] uppercase font-bold text-xs tracking-wider">
                Sets
              </span>
              <span className="font-semibold text-white">
                {workout.sets || 4}
              </span>
            </div>

            <div className="flex justify-between py-2.5">
              <span className="text-[#8B8D90] uppercase font-bold text-xs tracking-wider">
                Reps
              </span>
              <span className="font-semibold text-white">
                {workout.reps || "6-8"}
              </span>
            </div>

            <div className="flex justify-between py-2.5">
              <span className="text-[#8B8D90] uppercase font-bold text-xs tracking-wider">
                Duration
              </span>
              <span className="font-semibold text-white">
                {workout.duration || 25} min
              </span>
            </div>

            <div className="flex justify-between py-2.5">
              <span className="text-[#8B8D90] uppercase font-bold text-xs tracking-wider">
                Calories
              </span>
              <span className="font-semibold text-white">
                {workout.caloriesBurned || workout.caloriesBurned || 180} kcal
              </span>
            </div>

            <div className="flex justify-between py-2.5">
              <span className="text-[#8B8D90] uppercase font-bold text-xs tracking-wider">
                Rating
              </span>
              <span className="font-semibold text-white">
                {workout.rating?.toFixed(1) || "4.8"}
              </span>
            </div>
          </div>

          {/* Instructions Step-by-Step Block */}
          <div className="space-y-3">
            <h3 className="text-sm font-black uppercase tracking-wider text-white">
              Instructions
            </h3>
            <ol className="text-xs md:text-sm text-[#8B8D90] space-y-2 list-decimal list-inside pl-1 leading-relaxed">
              {workout.instructions && workout.instructions.length > 0 ? (
                workout.instructions.map((step: string, index: number) => (
                  <li key={index} className="pl-1">
                    <span className="text-gray-300">{step}</span>
                  </li>
                ))
              ) : (
                <>
                  <li>
                    <span className="text-gray-300">
                      Lie on the bench with eyes under the bar and feet planted.
                    </span>
                  </li>
                  <li>
                    <span className="text-gray-300">
                      Unrack with locked elbows and lower the bar to mid-chest.
                    </span>
                  </li>
                  <li>
                    <span className="text-gray-300">
                      Press up in a slight arc until elbows lock without
                      bouncing.
                    </span>
                  </li>
                  <li>
                    <span className="text-gray-300">
                      Keep shoulder blades pinched and a natural arch in the
                      back.
                    </span>
                  </li>
                </>
              )}
            </ol>
          </div>

          {/* Action Call Controls Group Using React Icons */}
          <div className="flex flex-wrap gap-3 pt-4">
            <button className="flex items-center gap-2 bg-[#B1FA10] text-[#0B0D12] hover:bg-[#a2e60e] font-black text-xs uppercase tracking-wider px-5 py-3 rounded-xl transition-colors cursor-pointer shadow-md">
              <span className="text-base">
                <FaCalendarPlus />
              </span>
              Add to today&apos;s plan
            </button>

            <button className="flex items-center gap-2 bg-[#111317] hover:bg-[#1A1D24] text-gray-300 hover:text-white border border-[#1A1D24] font-black text-xs uppercase tracking-wider px-5 py-3 rounded-xl transition-colors cursor-pointer">
              <span className="text-base">
                <FaRegBookmark />
              </span>
              Save for later
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkoutDetailPage;
