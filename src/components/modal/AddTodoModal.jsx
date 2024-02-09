import { v4 as uuid } from "uuid";
import TodoForm from "../TodoForm";
import { useState } from "react";
import { useTodoContext } from "../../context/TodoProvider";
import ModalContainer from "./ModalContainer";

const AddTodoModal = ({ setIsOpen }) => {
  const { setTodos } = useTodoContext();
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("");

  const handleAddTodo = (e) => {
    e.preventDefault();
    const data = localStorage.getItem("todos");
    const todos = JSON.parse(data);
    let newTodos;

    if (!todos) {
      newTodos = [{ title, priority, status: "Incomplete", id: uuid() }];
      localStorage.setItem("todos", JSON.stringify(newTodos));
      setTodos(newTodos);
    } else {
      newTodos = [
        ...todos,
        { title, priority, status: "Incomplete", id: uuid() },
      ];
      localStorage.setItem("todos", JSON.stringify(newTodos));
      setTodos(newTodos);
    }

    setIsOpen((prev) => !prev);
  };

  return (
    <ModalContainer
      title="Add Todo"
      handleClose={() => setIsOpen((prev) => !prev)}
    >
      <TodoForm
        title={title}
        priority={priority}
        setTitle={setTitle}
        setPriority={setPriority}
        handleSubmit={handleAddTodo}
      />
    </ModalContainer>
  );
};

export default AddTodoModal;
