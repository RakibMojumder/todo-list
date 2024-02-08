const Table = ({ colums, data }) => {
  return (
    <div className="overflow-x-auto">
      <table className="bg-[#23252F] p-2 w-full">
        <thead className="bg-primary">
          <tr>
            {colums.map((colum) => (
              <th
                key={colum.label}
                className="p-2 tracking-wide text-white font-normal text-center"
              >
                {colum.label}
              </th>
            ))}
          </tr>
        </thead>

        <tbody className="divide-y divide-[#1C1D24]">
          {data.map((item) => (
            <tr key={item.todo} className="text-white text-center">
              <td className="px-2 py-4 whitespace-nowrap">{item.no}</td>
              <td className="px-2 py-4 whitespace-nowrap">{item.todo}</td>
              <td className="px-2 py-4 whitespace-nowrap text-xs font-medium">
                <span
                  className={`px-2 py-1 rounded ${
                    item.priority == "High"
                      ? "bg-red-500"
                      : item.priority == "Low"
                      ? "bg-green-500"
                      : "bg-yellow-500"
                  }`}
                >
                  {item.priority}
                </span>
              </td>
              <td className="px-2 py-4 whitespace-nowrap space-x-3">
                <button className="bg-green-500/[.15] text-sm text-green-500 px-3 py-1 rounded">
                  Edit
                </button>
                <button className="bg-red-500/[.15] text-sm text-red-500 px-3 py-1 rounded">
                  Delete
                </button>
                <button className="bg-primary/[.25] text-sm text-indigo-500 font-medium px-3 py-1 rounded">
                  Start
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
