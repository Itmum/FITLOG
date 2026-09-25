import Link from "next/link";
import React from "react";
import TodayPlanList from "./TodayPlanList";
import SavedList from "./SavedList";

const ListSection = () => {
  return (
    <>
      <div className="tabs tabs-lift">
        <input
          type="radio"
          name="my_tabs_3"
          className="tab"
          aria-label="Today's Plan"
        />
        <TodayPlanList></TodayPlanList>
        <input
          type="radio"
          name="my_tabs_3"
          className="tab"
          aria-label="Saved"
          defaultChecked
        />
        <SavedList></SavedList>
      </div>
    </>
  );
};

export default ListSection;
