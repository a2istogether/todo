import React, { useState } from "react";
import { MdAssignmentAdd } from "react-icons/md";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { addTask } from "../features/tasks/taskSlice";

const TaskInput = () => {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();

  const handleAddTask = (e) => {
    e.preventDefault();
    if (task.trim()) {
      toast.success('A Task Added');
      dispatch(addTask({ text: task, priority: "Medium" }));
      setTask("");
    }
  };

  return (
    <div className="flex  mt-3">
      <form onSubmit={handleAddTask} className="  gap-2 pl-1 shadow-lg flex  items-center bg-white  dark:bg-black hover:shadow-xl border-2 border-green-500  rounded-md">
        <MdAssignmentAdd className="text-xl text-green-500 cursor-pointer" />
        <input
          type="text"
          className="flex-1 bg-transparent dark:text-white focus:outline-none md:w-screen max-w-[450px] "
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Add a new task"
        />
      <button type="submit" className="bg-green-500 px-3 py-1 text-white active:bg-green-700">Add Task</button>
      </form>
    </div>
  );
};

export default TaskInput;
