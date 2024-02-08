import { data, todoColum } from "../utils/data";
import AddTodo from "./AddTodo";
import Table from "./Table";
// bg-[#1C1D24]
const Todos = () => {
  return (
    <div className="lg:w-2/3 mx-auto p-10 space-y-5">
      <AddTodo />
      <div className="space-y-3">
        <Table colums={todoColum} data={data} />
        {/* {[...Array(5)].map((_, index) => (
          <Todo key={index} />
        ))} */}
      </div>
    </div>
  );
};

export default Todos;
