import { WorkoutContext } from "@/context/WorkoutsContext";
import { useContext } from "react";

const NavSavedBadge = () => {
  const workoutProvider = useContext(WorkoutContext);
  if (!workoutProvider) {
    throw new Error("There is not workoutProvider");
  }
  const { savedList } = workoutProvider;

  return (
    <div className="w-5 h-5 rounded-full bg-[#B1FA10] text-[#0B0D12] text-xs font-bold flex items-center justify-center">
      {savedList.length > 9 ? `9+` : `${savedList.length}`}
    </div>
  );
};

export default NavSavedBadge;
