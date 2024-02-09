/* eslint-disable react/prop-types */

import Tab from "./Tab";

const Tabs = ({ tabs, activeTab, setActiveTab, hoveredTab, setHoveredTab }) => {
  const handleActiveTab = (item) => {
    setActiveTab(item);
  };

  return (
    <div className="mb-5 flex md:justify-center overflow-x-auto pb-2 px-5 tab-scroll lg:w-[90%] md:mx-auto">
      <div className="inline-flex flex-nowrap items-center justify-center bg-neutral-800 dark:bg-white/[0.07] p-1.5 rounded-full">
        {tabs.map((tab) => (
          <>
            <Tab
              key={tab.id}
              tab={tab}
              activeTab={activeTab}
              hoveredTab={hoveredTab}
              setHoveredTab={setHoveredTab}
              handler={handleActiveTab}
            />
          </>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
