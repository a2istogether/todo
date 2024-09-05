// src/components/TaskList.js
import React, { useEffect, useState } from 'react';
import { MdOutlineDeleteForever } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { removeTask, setPriority, toggleComplete } from '../features/tasks/taskSlice';

const priorityOrder = { Low: 1, Medium: 2, High: 3 };

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks.tasks);
  const dispatch = useDispatch();
  const [filterValue,setFilterValue] = useState('all');
  const {searchingWords,isGridMode } = useSelector((state) => state.constant);

  
  // Sort tasks by priority
  
  const [allTasks,setAllTasks] = useState([]);
  const handleRemoveTask = (id) => {
    dispatch(removeTask(id));
  };

  const handleToggleComplete = (taskId) => {
    dispatch(toggleComplete(taskId));
  };
  const handleChangePriority = (id, priority) => {
    dispatch(setPriority({ id, priority }));
  };
  
  useEffect(()=>{
   const sortedTasks = tasks.slice().sort((a, b) => priorityOrder[b.priority] - priorityOrder[a.priority]);
   if (filterValue === 'all') setAllTasks(sortedTasks);
   if (filterValue === 'complete') setAllTasks(sortedTasks.filter(task => task.isComplete));
   if (filterValue === 'pending') setAllTasks(sortedTasks.filter(task => !task.isComplete));
  },[filterValue,tasks]);

  useEffect(()=>{
    const sortedTasks = tasks.slice().sort((a, b) => priorityOrder[b.priority] - priorityOrder[a.priority]);
    const filteredList = sortedTasks.filter(item => (item.text.toLowerCase()).includes(searchingWords.toLowerCase()));
    setAllTasks(filteredList);
  },[searchingWords])


  return (
    <>
    <select onChange={(e)=> setFilterValue(e.target.value)} value={filterValue}
            className=' max-w-[120px] bg-green-500 cursor-pointer text-white font-bold rounded-lg p-1'
            >
            <option value="all">All</option>
            <option value="complete">Completed</option>
            <option value="pending">Pending</option>
          </select>
    
    <ul className={isGridMode && `grid grid-cols-2 md:grid-cols-3 gap-1 md:gap-3`}>
      {allTasks.map((task) => (
        <li key={task.id} className={`${isGridMode? '':"flex items-center justify-between"} mt-1 bg-green-100 dark:bg-green-600 dark:text-white py-2 pl-3 pr-1 rounded-lg gap-1 `}>
          <div className='flex gap-2 truncate '>
          <input 
          id={"task"+ task.id}
            type="checkbox" 
            checked={task.isComplete} 
            onChange={() => handleToggleComplete(task.id)} 
          />
          <label className={`md:text-lg font-bold capitalize ${task.isComplete?'line-through text-red-500':''}` } htmlFor={"task"+ task.id}>{task.text}</label>
          </div>
          <div className='flex py-2 items-center justify-center gap-2'>
          <select onChange={(e) => handleChangePriority(task.id, e.target.value)} value={task.priority}
            className='  bg-green-500 cursor-pointer text-white font-bold rounded-lg p-1'
            >
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
          <button className=' text-red-600 text-3xl' onClick={() => handleRemoveTask(task.id)}><MdOutlineDeleteForever/></button>
          </div>
        </li>
      ))}
    </ul>
    </>
  );
};

export default TaskList;
