import { useTodoContext } from "../../context/TodoProvider";
import ModalContainer from "./ModalContainer";

const DeleteTodoModal = ({ todo, setOpenDeleteModal }) => {
  const { todos, setTodos } = useTodoContext();

  const handleDeleteTodo = () => {
    const filteredTodo = todos.filter((td) => td.id !== todo.id);
    setTodos(filteredTodo);
    localStorage.setItem("todos", JSON.stringify(filteredTodo));
  };

  return (
    <ModalContainer
      title="Delete Modal"
      handleClose={() => setOpenDeleteModal((prev) => !prev)}
    >
      <div>
        <h3 className="text-center mb-6">
          Are you sure want to delete is todo ?
        </h3>
        <div className="flex justify-evenly">
          <button
            onClick={() => setOpenDeleteModal((prev) => !prev)}
            className="px-5 py-1 border border-green-500 bg-green-500 text-white rounded"
          >
            No
          </button>
          <button
            onClick={handleDeleteTodo}
            className="px-5 py-1 border border-red-500 text-red-500 rounded"
          >
            Yes
          </button>
        </div>
      </div>
    </ModalContainer>
  );
};

export default DeleteTodoModal;
