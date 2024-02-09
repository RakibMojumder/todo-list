import { v4 as uuid } from "uuid";
import TodoForm from "../TodoForm";
import { useState } from "react";
import { useTodoContext } from "../../context/TodoProvider";
import ModalContainer from "./ModalContainer";
import { toast } from "sonner";

const AddTodoModal = ({ setActiveTab }) => {
  const { setTodos } = useTodoContext();
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("");

  const handleAddTodo = (e) => {
    e.preventDefault();

    if (!title || !priority) {
      return toast.error("All fields are required");
    }

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

    toast.success("Todo added successfully");
    setActiveTab("Todos");
  };

  return (
    <ModalContainer title="Add Todo" handleClose={() => setActiveTab("Todos")}>
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
