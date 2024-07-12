import React, { useState } from 'react'; // Import React and useState hook for managing state
import { useDispatch } from 'react-redux'; // Import useDispatch hook to dispatch actions to Redux store
import { addTask } from '../taskSlice'; // Import addTask action from taskSlice
import { TextField, Button, Container } from '@mui/material'; // Import Material-UI components

/**
 * Component for adding a new task
 */
const TaskInput = () => {
  const [task, setTask] = useState(''); // useState hook to manage the input value
  const dispatch = useDispatch(); // Hook to dispatch actions

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    dispatch(addTask(task)); // Dispatch addTask action with the task input
    setTask(''); // Clear the input field
  };

  return (
    <Container>
      {/* Form to handle task input */}
      <form onSubmit={handleSubmit}>
        {/* TextField is a Material-UI component for input fields */}
        <TextField 
          label="Add a new task" // Label for the input field
          variant="outlined" // Outlined style for the input field
          value={task} // Value of the input field
          onChange={(e) => setTask(e.target.value)} // Update task state on input change
          fullWidth // Makes the input field take full width of the container
          margin="normal" // Normal margin around the input field
        />
        {/* Button is a Material-UI component for buttons */}
        <Button type="submit" variant="contained" color="primary">
          Add Task
        </Button>
      </form>
    </Container>
  );
};

export default TaskInput; // Export TaskInput component as default
