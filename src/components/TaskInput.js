import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../taskSlice';
import { TextField, Button, Container } from '@mui/material';

const TaskInput = () => {
  const [task, setTask] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTask(task));
    setTask('');
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <TextField 
          label="Add a new task"
          variant="outlined"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          fullWidth
          margin="normal"
        />
        <Button type="submit" variant="contained" color="primary">
          Add Task
        </Button>
      </form>
    </Container>
  );
};

export default TaskInput;
