import { v4 as uuid } from "uuid";
import { useState } from "react";
import Modal from "./Modal";

const AddTodo = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("");

  const handleAddTodo = (e) => {
    e.preventDefault();
    const data = localStorage.getItem("todos");
    const todos = JSON.parse(data);
    let newTodos;

    if (!todos) {
      newTodos = [{ title, priority, status: "incomplete", id: uuid() }];
      localStorage.setItem("todos", JSON.stringify(newTodos));
    } else {
      newTodos = [
        ...todos,
        { title, priority, status: "incomplete", id: uuid() },
      ];
      localStorage.setItem("todos", JSON.stringify(newTodos));
    }
  };

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
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Add Todo">
        <form onSubmit={handleAddTodo} className="space-y-3">
          <input
            type="text"
            name=""
            placeholder="Enter todo title"
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border border-primary py-1.5 pl-3 rounded focus:outline-none"
          />
          <select
            name=""
            id=""
            defaultValue={"Priority"}
            onChange={(e) => setPriority(e.target.value)}
            className="w-full py-2 border border-primary rounded focus:outline-none pl-3 cursor-pointer"
          >
            <option value="Priority" disabled>
              Priority
            </option>
            <option value="High">High</option>
            <option value="High">Medium</option>
            <option value="High">Low</option>
          </select>
          <button
            type="submit"
            className="w-full bg-primary text-white py-2 rounded"
          >
            Submit
          </button>
        </form>
      </Modal>
    </div>
  );
};

export default AddTodo;
