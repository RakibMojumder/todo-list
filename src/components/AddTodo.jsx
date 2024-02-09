import { useState } from "react";
import AddTodoModal from "./modal/AddTodoModal";

const AddTodo = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex items-center h-10">
      <input
        type="text"
        name=""
        placeholder="Enter todo title"
        className="flex-1 bg-[#23252F] border border-[#23252F] text-white focus:border-primary focus:outline-none pl-3 h-full"
      />
      <button
        onClick={() => setIsOpen(true)}
        className="h-full bg-primary border border-primary text-white px-5"
      >
        Add
      </button>

      {isOpen && <AddTodoModal setIsOpen={setIsOpen} />}
    </div>
  );
};

export default AddTodo;
