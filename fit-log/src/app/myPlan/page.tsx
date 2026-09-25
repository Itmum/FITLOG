import ListSection from "@/components/myPlanPage/ListSection";
import StatPannel from "@/components/myPlanPage/StatPannel";
import React from "react";

const MyPlan = () => {
  return (
    <div className="bg-[#0B0D12] text-white py-12 px-4">
      <div className="container mx-auto">
        {/* Header Block */}
        <div className="mb-6 space-y-1">
          <h1 className="text-3xl font-black tracking-tight uppercase">
            My Plan
          </h1>
          <p className="text-[#8B8D90] text-sm font-medium">
            Cap of five lifts for today. Finish them, then load more.
          </p>
        </div>

        {/* Unified Dashboard Stat Panel */}
        <StatPannel></StatPannel>
        <ListSection></ListSection>
      </div>
    </div>
  );
};

export default MyPlan;
