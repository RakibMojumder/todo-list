export const todoColum = [
  { label: "No.", value: "no" },
  { label: "Todo", value: "todo" },
  { label: "Priority", value: "priority" },
  {
    label: "Actions",
    content: () => (
      <div className="space-x-3">
        <button className="bg-green-500/[.15] text-sm text-green-500 px-3 py-1 rounded">
          Edit
        </button>
        <button className="bg-red-500/[.15] text-sm text-red-500 px-3 py-1 rounded">
          Delete
        </button>
        <button className="bg-primary/[.25] text-sm text-indigo-500 font-medium px-3 py-1 rounded">
          Start
        </button>
      </div>
    ),
  },
];

export const data = [
  {
    no: "1",
    todo: "Lorem ipsum dolor sit amet.",
    priority: "high",
    status: "incomplete",
  },
  {
    no: "2",
    todo: "Lorem ipsum dolor sit amet.",
    priority: "Low",
    status: "incomplete",
  },
  {
    no: "3",
    todo: "Lorem ipsum dolor sit amet.",
    priority: "Medium",
    status: "incomplete",
  },
  {
    no: "4",
    todo: "Lorem ipsum dolor sit amet.",
    priority: "High",
    status: "incomplete",
  },
  {
    no: "5",
    todo: "Lorem ipsum dolor sit amet.",
    priority: "High",
    status: "incomplete",
  },
  {
    no: "6",
    todo: "Lorem ipsum dolor sit amet.",
    priority: "High",
    status: "incomplete",
  },
];
