/* eslint-disable react/prop-types */
import { useState } from "react";
import DeleteTodoModal from "./modal/DeleteTodoModal";

const CompleteTodo = ({ todo, index }) => {
  const [openDeleteModal, setOpenDeleteModal] = useState(false);

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
            onClick={() => setOpenDeleteModal(true)}
            className="bg-red-500/[.15] text-sm text-red-500 px-3 py-1 rounded"
          >
            Delete
          </button>
        </td>
      </tr>

      {/* DELETE MODAL */}
      {openDeleteModal && (
        <DeleteTodoModal todo={todo} setOpenDeleteModal={setOpenDeleteModal} />
      )}
    </>
  );
};

export default CompleteTodo;
