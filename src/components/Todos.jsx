import { useTodoContext } from "../context/TodoProvider";
import Todo from "./Todo";

const Todos = () => {
  const { incompleteTodos } = useTodoContext();

  return (
    <>
      {incompleteTodos.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="bg-[#23252F] p-2 w-full">
            <thead className="bg-primary">
              <tr>
                <th className="w-20 p-2 tracking-wide text-white font-normal text-center">
                  No.
                </th>
                <th className="p-2 tracking-wide text-white font-normal text-center">
                  Title
                </th>
                <th className="w-40 p-2 tracking-wide text-white font-normal text-center">
                  Priority
                </th>
                <th className="w-40 p-2 tracking-wide text-white font-normal text-center">
                  Status
                </th>
                <th className="w-60 p-2 tracking-wide text-white font-normal text-center">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-[#1C1D24]">
              {incompleteTodos?.map((todo, index) => (
                <Todo key={todo.id} index={index} todo={todo} />
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="text-gray-300 text-center font-semibold mt-5">
          No Todo Founds
        </div>
      )}
    </>
  );
};

export default Todos;
