import TodoContainer from "./components/TodoContainer";
import TodoProvider from "./context/TodoProvider";
import { Toaster } from "sonner";

const App = () => {
  return (
    <TodoProvider>
      <div className="bg-[#14161B] min-h-svh w-full lg:py-12">
        <TodoContainer />
      </div>
      <Toaster
        toastOptions={{
          unstyled: true,
          classNames: {
            error: "bg-red-500",
            success: "bg-green-500",
            warning: "text-yellow-500",
            info: "bg-blue-500",
            toast:
              "w-full px-2 py-3 rounded-md flex items-center justify-center gap-x-2.5",
          },
        }}
      />
    </TodoProvider>
  );
};

export default App;
