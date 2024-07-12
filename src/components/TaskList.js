import React from 'react'; // Import React to use JSX
import { useSelector, useDispatch } from 'react-redux'; // Import useSelector to access Redux state and useDispatch to dispatch actions
import { deleteTask, editTask, toggleComplete } from '../taskSlice'; // Import actions from taskSlice
import {
  List,
  ListItem,
  ListItemText,
  IconButton,
  Checkbox,
  Container,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from '@mui/material'; // Import Material-UI components
import { Delete, Edit } from '@mui/icons-material'; // Import Material-UI icons

/**
 * Component for displaying the list of tasks
 */
const TaskList = () => {
  const tasks = useSelector((state) => state.tasks); // Select tasks from Redux store
  const dispatch = useDispatch(); // Hook to dispatch actions
  const [editIndex, setEditIndex] = React.useState(null); // State for tracking which task is being edited
  const [editText, setEditText] = React.useState(''); // State for edit task input

  // Open edit dialog with task information
  const handleEditOpen = (index, text) => {
    setEditIndex(index); // Set the index of the task being edited
    setEditText(text); // Set the text of the task being edited
  };

  // Close edit dialog
  const handleEditClose = () => {
    setEditIndex(null); // Reset edit index
    setEditText(''); // Clear edit text
  };

  // Save edited task
  const handleEditSave = () => {
    dispatch(editTask({ index: editIndex, newText: editText })); // Dispatch editTask action
    handleEditClose(); // Close the edit dialog
  };

  return (
    <Container>
      {/* List component to display the list of tasks */}
      <List>
        {tasks.map((task, index) => (
          <ListItem
            key={index} // Unique key for each list item
            secondaryAction={
              <>
                {/* Edit button */}
                <IconButton edge="end" onClick={() => handleEditOpen(index, task.text)}>
                  <Edit />
                </IconButton>
                {/* Delete button */}
                <IconButton edge="end" onClick={() => dispatch(deleteTask(index))}>
                  <Delete />
                </IconButton>
              </>
            }
          >
            {/* Checkbox to mark task as completed */}
            <Checkbox
              edge="start" // Aligns checkbox to the start
              checked={task.completed} // Checkbox state
              tabIndex={-1} // Removes tab focus
              disableRipple // Removes ripple effect
              onChange={() => dispatch(toggleComplete(index))} // Dispatch toggleComplete action
            />
            {/* Display task text */}
            <ListItemText primary={task.text} style={{ textDecoration: task.completed ? 'line-through' : 'none' }} />
          </ListItem>
        ))}
      </List>

      {/* Dialog for editing task */}
      <Dialog open={editIndex !== null} onClose={handleEditClose}>
        <DialogTitle>Edit Task</DialogTitle>
        <DialogContent>
          {/* TextField for editing task text */}
          <TextField
            value={editText}
            onChange={(e) => setEditText(e.target.value)} // Update edit text state
            fullWidth
            variant="outlined"
            margin="normal"
          />
        </DialogContent>
        <DialogActions>
          {/* Cancel button */}
          <Button onClick={handleEditClose} color="secondary">
            Cancel
          </Button>
          {/* Save button */}
          <Button onClick={handleEditSave} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default TaskList; // Export TaskList component as default
