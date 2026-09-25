import Banner from "@/components/homepage/Banner";
import WorkoutLibrary from "@/components/homepage/WorkoutLibrary";
import Image from "next/image";
import { FaHome } from "react-icons/fa";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <WorkoutLibrary></WorkoutLibrary>
    </div>
  );
}
