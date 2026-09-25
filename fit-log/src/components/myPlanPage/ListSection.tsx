"use client";
import React, { useContext } from "react";
import TodayPlanList from "./TodayPlanList";
import SavedList from "./SavedList";
import { TabContext } from "@/context/TabContext";

const ListSection = () => {
  const tabProvider = useContext(TabContext);
  if (!tabProvider) {
    throw new Error("There is no tabProvider");
  }
  const { activeTab, setActiveTab } = tabProvider;
  return (
    <>
      <div className="tabs tabs-lift">
        <input
          type="radio"
          name="my_tabs_3"
          className="tab"
          aria-label="Today's Plan"
          checked={activeTab === "plan"}
          onChange={() => setActiveTab("plan")}
        />
        <TodayPlanList></TodayPlanList>
        <input
          type="radio"
          name="my_tabs_3"
          className="tab"
          aria-label="Saved"
          //   defaultChecked
          checked={activeTab === "saved"}
          onChange={() => setActiveTab("saved")}
        />
        <SavedList></SavedList>
      </div>
    </>
  );
};

export default ListSection;
