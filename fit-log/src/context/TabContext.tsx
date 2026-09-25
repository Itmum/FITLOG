"use client";
import React, { createContext, useState } from "react";
interface ITabContext {
  activeTab: "saved" | "plan";
  setActiveTab: React.Dispatch<React.SetStateAction<"saved" | "plan">>;
}
export const TabContext = createContext<ITabContext | undefined>(undefined);
const TabProvider = ({ children }: { children: React.ReactNode }) => {
  const [activeTab, setActiveTab] = useState<"saved" | "plan">("saved");
  const sharedData = { activeTab, setActiveTab };
  return (
    <TabContext.Provider value={sharedData}>{children}</TabContext.Provider>
  );
};

export default TabProvider;
