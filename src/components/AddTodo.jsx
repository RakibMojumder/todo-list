import React from "react";

const AddTodo = () => {
  return (
    <div className="flex items-center h-10">
      <input
        type="text"
        name=""
        placeholder="Enter todo title"
        className="flex-1 bg-[#23252F] border border-[#23252F] text-white focus:border-primary focus:outline-none pl-3 h-full"
      />
      <button className="h-full bg-primary border border-primary text-white px-5">
        Add
      </button>
    </div>
  );
};

export default AddTodo;
