import { configureStore } from '@reduxjs/toolkit'; // Import configureStore to create a Redux store
import taskReducer from './taskSlice'; // Import task reducer

/**
 * Configure and create the Redux store
 */
const store = configureStore({
  reducer: {
    tasks: taskReducer, // Add taskReducer to handle tasks state
  },
});

export default store; // Export the configured store
