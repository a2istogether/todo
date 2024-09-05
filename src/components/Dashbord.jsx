import React from 'react';
import { useSelector } from 'react-redux';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Dashboard = () => {
  const tasks = useSelector(state => state.tasks.tasks);
  const completedTasks = tasks.filter(task => task.isComplete).length;
  const totalTasks = tasks.length;
  const percentage = totalTasks ? (completedTasks / totalTasks) * 100 : 0;

  return (
    <div className="flex flex-col items-center mt-3 p-6 bg-green-100 dark:bg-white/10 dark:border border-black rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Task Completion Dashboard</h2>
      <div className="w-40 h-40 mb-4">
        <CircularProgressbar 
          value={percentage} 
          text={`${Math.round(percentage)}%`} 
          className="text-center text-red-600"
        />
      </div>
      <div className="text-gray-700  font-semibold">
        <p>Total Tasks: {totalTasks}</p>
        <p>Completed Tasks: {completedTasks}</p>
        <p>Pending Tasks: {totalTasks - completedTasks}</p>
      </div>
    </div>
  );
};

export default Dashboard;
