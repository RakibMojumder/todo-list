const TodoForm = ({ title, setTitle, priority, setPriority, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit} className="space-y-6 text-black p-5 pt-0">
      <div className="space-y-1.5">
        <label className="text-neutral-400">Enter todo title:</label>
        <input
          type="text"
          value={title}
          placeholder="Enter todo title"
          onChange={(e) => setTitle(e.target.value)}
          className="w-full pl-3 py-1.5 rounded bg-[#23252F] border border-[#23252F] text-white focus:border-primary focus:outline-none"
        />
      </div>

      <div className="space-y-1.5">
        <label className="text-neutral-400">Select priority</label>
        <select
          id=""
          defaultValue={priority ? priority : "Select Priority"}
          onChange={(e) => setPriority(e.target.value)}
          className="w-full py-2 pl-3 bg-[#23252F] border border-[#23252F] text-white focus:border-primary focus:outline-none cursor-pointer"
        >
          <option value="Select Priority" disabled>
            Select Priority
          </option>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
      </div>
      <button
        type="submit"
        className="w-full bg-primary text-white py-2 rounded"
      >
        Submit
      </button>
    </form>
  );
};

export default TodoForm;
