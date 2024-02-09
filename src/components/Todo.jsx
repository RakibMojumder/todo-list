/* eslint-disable react/prop-types */
import { useState } from "react";
import { useTodoContext } from "../context/TodoProvider";
import EditTodoModal from "./modal/EditTodoModal";
import DeleteTodoModal from "./modal/DeleteTodoModal";

const Todo = ({ todo, index }) => {
  const { todos, setTodos } = useTodoContext();
  const [openEditModal, setOpenEditModal] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);

  const handleStartTodo = (todo) => {
    const findTodo = todos.find((td) => td.id === todo.id);
    const filteredTodo = todos.filter((td) => td.id !== todo.id);

    const updatedTodo = { ...findTodo, status: "Ongoing" };
    const newTodos = [...filteredTodo, updatedTodo];
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  return (
    <>
      <tr key={todo.id} className="text-white text-center">
        <td className="px-2 py-4 whitespace-nowrap">{index + 1}</td>
        <td className="px-2 py-4 whitespace-nowrap lg:whitespace-normal">
          {todo.title}
        </td>
        <td className="px-2 py-4 whitespace-nowrap text-xs font-medium">
          <span
            className={`px-2 py-1 rounded ${
              todo.priority == "High"
                ? "bg-red-500"
                : todo.priority == "Low"
                ? "bg-green-500"
                : "bg-yellow-500"
            }`}
          >
            {todo.priority}
          </span>
        </td>
        <td className="px-2 py-4 whitespace-nowrap">{todo.status}</td>
        <td className="px-2 py-4 whitespace-nowrap space-x-3">
          <button
            onClick={() => setOpenEditModal(true)}
            className="bg-green-500/[.15] text-sm text-green-500 px-3 py-1 rounded"
          >
            Edit
          </button>
          <button
            onClick={() => setOpenDeleteModal(true)}
            className="bg-red-500/[.15] text-sm text-red-500 px-3 py-1 rounded"
          >
            Delete
          </button>
          <button
            onClick={() => handleStartTodo(todo)}
            className="bg-primary/[.25] text-sm text-indigo-500 font-medium px-3 py-1 rounded"
          >
            Start
          </button>
        </td>
      </tr>

      {/* EDIT MODAL */}
      {openEditModal && (
        <EditTodoModal todo={todo} setOpenEditModal={setOpenEditModal} />
      )}

      {/* DELETE MODAL */}
      {openDeleteModal && (
        <DeleteTodoModal todo={todo} setOpenDeleteModal={setOpenDeleteModal} />
      )}
    </>
  );
};

export default Todo;