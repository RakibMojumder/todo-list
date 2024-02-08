/* eslint-disable react/prop-types */

import { useState } from "react";
import Tab from "./Tab";

const tabs = [
  { id: 1, label: "Todos" },
  { id: 2, label: "Ongoing" },
  { id: 3, label: "Completed" },
];

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("Todos");
  const [hoveredTab, setHoveredTab] = useState("");

  const handleActiveTab = (item) => {
    setActiveTab(item);
  };

  return (
    <div className="mb-5 flex justify-center overflow-x-auto pb-2 tab-scroll w-[90%] mx-auto">
      <div className="inline-flex flex-nowrap items-center justify-center bg-neutral-800 dark:bg-white/[0.07] p-1.5 rounded-full">
        {tabs.map((tab) => (
          <Tab
            key={tab.id}
            tab={tab}
            activeTab={activeTab}
            hoveredTab={hoveredTab}
            setHoveredTab={setHoveredTab}
            handler={handleActiveTab}
          />
        ))}
      </div>
    </div>
  );
};

export default Tabs;