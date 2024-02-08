import { data, todoColum } from "../utils/data";
import AddTodo from "./AddTodo";
import Table from "./Table";
import Tabs from "./Tabs";

// bg-[#1C1D24]
const Todos = () => {
  return (
    <div className="lg:w-2/3 mx-auto p-10 space-y-5">
      <AddTodo />
      <Tabs />
      <div className="space-y-3">
        <Table colums={todoColum} data={data} />
      </div>
    </div>
  );
};

export default Todos;
