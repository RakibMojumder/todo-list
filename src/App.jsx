import TodoContainer from "./components/TodoContainer";
import TodoProvider from "./context/TodoProvider";

const App = () => {
  return (
    <TodoProvider>
      <div className="bg-[#14161B] min-h-svh w-full lg:py-12">
        <TodoContainer />
      </div>
    </TodoProvider>
  );
};

export default App;
