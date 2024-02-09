import { useEffect, useContext, useState, createContext } from "react";

export const TODO_CONTEXT = createContext();

const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const incompleteTodos = todos?.filter((todo) => todo.status === "Incomplete");
  const ongoingTodos = todos?.filter((todo) => todo.status === "Ongoing");
  const completedTodos = todos?.filter((todo) => todo.status === "Completed");

  useEffect(() => {
    const getTodos = () => {
      const data = localStorage.getItem("todos");
      const todos = JSON.parse(data);

      if (todos) {
        setTodos(todos);
      }
    };

    getTodos();
  }, []);

  const value = {
    todos,
    setTodos,
    ongoingTodos,
    completedTodos,
    incompleteTodos,
  };

  return (
    <TODO_CONTEXT.Provider value={value}>{children}</TODO_CONTEXT.Provider>
  );
};

export const useTodoContext = () => {
  return useContext(TODO_CONTEXT);
};

export default TodoProvider;
