import { useState } from "react";
import { useTodoContext } from "../../context/TodoProvider";
import TodoForm from "../TodoForm";
import ModalContainer from "./ModalContainer";

const EditTodoModal = ({ todo, setOpenEditModal }) => {
  const { todos, setTodos } = useTodoContext();
  const [title, setTitle] = useState(todo.title);
  const [priority, setPriority] = useState(todo.priority);

  const handleEditTodo = (e) => {
    e.preventDefault();
    const findTodo = todos.find((td) => td.id === todo.id);
    const filteredTodo = todos.filter((td) => td.id !== todo.id);
    const newTodo = { ...findTodo, title, priority };
    setTodos([...filteredTodo, newTodo]);
    localStorage.setItem("todos", JSON.stringify([...filteredTodo, newTodo]));
    setOpenEditModal((prev) => !prev);
  };

  return (
    <ModalContainer
      title="Edit Modal"
      handleClose={() => setOpenEditModal((prev) => !prev)}
    >
      <TodoForm
        title={title}
        priority={priority}
        setTitle={setTitle}
        setPriority={setPriority}
        handleSubmit={handleEditTodo}
      />
    </ModalContainer>
  );
};

export default EditTodoModal;
