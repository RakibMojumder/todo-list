/* eslint-disable react/prop-types */
import { motion as m } from "framer-motion";

const Tab = ({ tab, activeTab, hoveredTab, handler, setHoveredTab }) => {
  return (
    <button
      key={tab.id}
      onClick={() => handler(tab.label)}
      onMouseOver={() => setHoveredTab(tab.label)}
      onMouseLeave={() => setHoveredTab("")}
      data-active={hoveredTab == tab.label}
      className={`px-4 py-1 text-center rounded-full relative z-10 whitespace-nowrap text-sm md:text-base space-x-1 last-of-type:space-x-0 ${
        activeTab == tab.label ? "text-black dark:text-white" : "text-white"
      }`}
    >
      <span>{tab.label}</span>
      <span>{tab.count ? `(${tab.count})` : ""}</span>
      {activeTab == tab.label && (
        <m.div
          className="absolute bottom-0 left-0 h-full w-full bg-primary rounded-full -z-10"
          layoutId="tab"
          transition={{
            type: "spring",
            duration: 0.7,
          }}
        ></m.div>
      )}
      {hoveredTab == tab.label && (
        <m.div
          className="absolute bottom-0 left-0 h-full w-full bg-primary/25 rounded-full -z-20"
          layoutId="tab-2"
          aria-hidden="true"
          transition={{
            type: "spring",
            duration: 0.5,
          }}
        ></m.div>
      )}
    </button>
  );
};

export default Tab;
