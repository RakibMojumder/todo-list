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
      className={`px-4 py-1 text-center rounded-full relative z-10 whitespace-nowrap text-sm md:text-base ${
        activeTab == tab.label ? "text-black dark:text-white" : "text-white"
      }`}
    >
      {tab.label ? tab.label : "All"}
      {activeTab == tab.label && (
        <m.div
          className="absolute bottom-0 left-0 h-full w-full bg-secondary dark:bg-primary rounded-full -z-10"
          layoutId="tab"
          //   aria-hidden="true"
          transition={{
            type: "spring",
            // bounce: 0.1,
            // stiffness: 130,
            // damping: 9,
            duration: 0.7,
          }}
        ></m.div>
      )}
      {hoveredTab == tab.label && (
        <m.div
          className="absolute bottom-0 left-0 h-full w-full bg-neutral-700 dark:bg-primary/25 rounded-full -z-20"
          layoutId="tab-2"
          aria-hidden="true"
          transition={{
            type: "spring",
            // bounce: 0.1,
            // stiffness: 130,
            // damping: 9,
            duration: 0.5,
          }}
        ></m.div>
      )}
    </button>
  );
};

export default Tab;
