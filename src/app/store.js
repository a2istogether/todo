import { configureStore } from '@reduxjs/toolkit';
import taskReducer from '../features/tasks/taskSlice';
import authReducer from '../features/auth/authSlice';
import contantReducer from '../features/constantSlice'

const store = configureStore({
  reducer: {
    tasks: taskReducer,
    auth: authReducer,
    constant:contantReducer,
  }
});

export default store;