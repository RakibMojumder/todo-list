import AddTodo from "./AddTodo";
import Todos from "./Todos";
import Tabs from "./Tabs";
import { useState } from "react";
import OngoingTodos from "./OngoingTodos";
import CompleteTodos from "./CompleteTodos";

const tabs = [
  { id: 1, label: "Todos" },
  { id: 2, label: "Ongoing" },
  { id: 3, label: "Completed" },
];

const TodoContainer = () => {
  const [activeTab, setActiveTab] = useState("Todos");
  const [hoveredTab, setHoveredTab] = useState("");

  return (
    <div className="lg:w-2/3 mx-auto p-10 space-y-5">
      <AddTodo />
      <Tabs
        tabs={tabs}
        activeTab={activeTab}
        hoveredTab={hoveredTab}
        setActiveTab={setActiveTab}
        setHoveredTab={setHoveredTab}
      />
      <div>
        {activeTab === "Todos" && <Todos />}
        {activeTab === "Ongoing" && <OngoingTodos />}
        {activeTab === "Completed" && <CompleteTodos />}
      </div>
    </div>
  );
};

export default TodoContainer;
