import { createSlice } from '@reduxjs/toolkit'; // Import createSlice to create a Redux slice

/**
 * Create a slice for task management
 */
const taskSlice = createSlice({
  name: 'tasks', // Name of the slice
  initialState: JSON.parse(localStorage.getItem('tasks')) || [], // Initialize state from local storage or empty array
  reducers: {
    // Reducer to add a task
    addTask: (state, action) => {
      state.push({ text: action.payload, completed: false }); // Add new task with default completed status as false
      localStorage.setItem('tasks', JSON.stringify(state)); // Update local storage
    },
    // Reducer to delete a task
    deleteTask: (state, action) => {
      const newState = state.filter((_, index) => index !== action.payload); // Remove task from state
      localStorage.setItem('tasks', JSON.stringify(newState)); // Update local storage
      return newState; // Return new state
    },
    // Reducer to edit a task
    editTask: (state, action) => {
      const { index, newText } = action.payload; // Get index and new text from action payload
      state[index].text = newText; // Update task text
      localStorage.setItem('tasks', JSON.stringify(state)); // Update local storage
    },
    // Reducer to toggle task completion
    toggleComplete: (state, action) => {
      state[action.payload].completed = !state[action.payload].completed; // Toggle completed status
      localStorage.setItem('tasks', JSON.stringify(state)); // Update local storage
    },
  },
});

export const { addTask, deleteTask, editTask, toggleComplete } = taskSlice.actions; // Export actions
export default taskSlice.reducer; // Export reducer
