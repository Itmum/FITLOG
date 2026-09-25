"use client";
import { WorkoutContext } from "@/context/WorkoutsContext";
import Link from "next/link";
import React, { useContext } from "react";
import WorkoutCard from "../shared/WorkoutCard";
import Image from "next/image";
import { FaCheck, FaRegClock, FaRegStar } from "react-icons/fa";
import { FaFireFlameCurved } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import ListItem from "./ListItem";
import EmptyList from "./EmptyList";

const TodayPlanList = () => {
  const workoutProvider = useContext(WorkoutContext);
  if (!workoutProvider) {
    throw new Error("There is No workoutProvider");
  }
  const { planList } = workoutProvider;

  return (
    <div className="tab-content bg-base-100 border-base-300 p-6">
      {planList.length > 0 ? (
        planList.map((workout) => (
          <ListItem key={workout.id} workout={workout}></ListItem>
        ))
      ) : (
        <EmptyList></EmptyList>
      )}
    </div>
  );
};

export default TodayPlanList;
