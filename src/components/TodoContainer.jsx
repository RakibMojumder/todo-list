import Todos from "./Todos";
import Tabs from "./Tabs";
import { useState } from "react";
import OngoingTodos from "./OngoingTodos";
import CompleteTodos from "./CompleteTodos";
import { useTodoContext } from "../context/TodoProvider";
import AddTodoModal from "./modal/AddTodoModal";
import { AnimatePresence } from "framer-motion";

const TodoContainer = () => {
  const [activeTab, setActiveTab] = useState("Todos");
  const [hoveredTab, setHoveredTab] = useState("");
  const { incompleteTodos, ongoingTodos, completedTodos } = useTodoContext();

  const tabs = [
    { id: 1, label: "Todos", count: incompleteTodos?.length },
    { id: 2, label: "Ongoing", count: ongoingTodos?.length },
    { id: 3, label: "Completed", count: completedTodos?.length },
    { id: 3, label: "Add Todo" },
  ];

  return (
    <div className="lg:w-2/3 mx-auto lg:p-10 space-y-5">
      <Tabs
        tabs={tabs}
        activeTab={activeTab}
        hoveredTab={hoveredTab}
        setActiveTab={setActiveTab}
        setHoveredTab={setHoveredTab}
      />
      <div className="p-4 lg:p-0">
        {activeTab === "Todos" && <Todos />}
        {activeTab === "Ongoing" && <OngoingTodos />}
        {activeTab === "Completed" && <CompleteTodos />}
        <AnimatePresence>
          {activeTab === "Add Todo" && (
            <AddTodoModal setActiveTab={setActiveTab} />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default TodoContainer;
