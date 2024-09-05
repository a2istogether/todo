// src/features/tasks/taskSlice.js
import { createSlice } from '@reduxjs/toolkit';



// Helper function to load tasks from localStorage
const loadTasksFromLocalStorage = () => {
  const savedTasks = localStorage.getItem('tasks');
  return savedTasks ? JSON.parse(savedTasks) : [];
};

// Helper function to save tasks to localStorage
const saveTasksToLocalStorage = (tasks) => {
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

const taskSlice = createSlice({
  name: 'tasks',
  initialState: {
    tasks: loadTasksFromLocalStorage(),
  },
  reducers: {
    addTask: (state, action) => {
      state.tasks.push({ ...action.payload, id: Date.now() });
      saveTasksToLocalStorage(state.tasks);
    },
    removeTask: (state, action) => {
      state.tasks = state.tasks.filter(task => task.id !== action.payload);
      saveTasksToLocalStorage(state.tasks);
    },
    setPriority: (state, action) => {
      const { id, priority } = action.payload;
      const task = state.tasks.find(task => task.id === id);
      if (task) task.priority = priority;
      saveTasksToLocalStorage(state.tasks);
    },
    toggleComplete: (state, action) => {
      const task = state.tasks.find(task => task.id === action.payload);
      if (task) task.isComplete = !task.isComplete;
      saveTasksToLocalStorage(state.tasks);
    }
  }
});

export const { addTask, removeTask, setPriority ,toggleComplete} = taskSlice.actions;
export default taskSlice.reducer;
