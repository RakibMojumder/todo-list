import { useEffect, useContext, useState, createContext } from "react";

export const TODO_CONTEXT = createContext();

const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

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
  };

  return (
    <TODO_CONTEXT.Provider value={value}>{children}</TODO_CONTEXT.Provider>
  );
};

export const useTodoContext = () => {
  return useContext(TODO_CONTEXT);
};

export default TodoProvider;
