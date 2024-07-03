import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {deleteTask, editTask, toggleComplete} from '../taskSlice'
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
} from '@mui/material'
import {Delete, Edit} from '@mui/icons-material'

const TaskList = () => {
  const tasks = useSelector(state => state.tasks)
  const dispatch = useDispatch()
  const [editIndex, setEditIndex] = React.useState(null)
  const [editText, setEditText] = React.useState('')

  const handleEditOpen = (index, text) => {
    setEditIndex(index)
    setEditText(text)
  }

  const handleEditClose = () => {
    setEditIndex(null)
    setEditText('')
  }

  const handleEditSave = () => {
    dispatch(editTask({index: editIndex, newText: editText}))
    handleEditClose()
  }

  return (
    <Container>
      <List>
        {tasks.map((task, index) => (
          <ListItem
            key={index}
            secondaryAction={
              <>
                <IconButton
                  edge="end"
                  onClick={() => handleEditOpen(index, task.text)}
                >
                  <Edit />
                </IconButton>
                <IconButton
                  edge="end"
                  onClick={() => dispatch(deleteTask(index))}
                >
                  <Delete />
                </IconButton>
              </>
            }
          >
            <Checkbox
              edge="start"
              checked={task.completed}
              tabIndex={-1}
              disableRipple
              onChange={() => dispatch(toggleComplete(index))}
            />
            <ListItemText
              primary={task.text}
              className="task-text"
              style={{textDecoration: task.completed ? 'line-through' : 'none'}}
            />
          </ListItem>
        ))}
      </List>
      <Dialog open={editIndex !== null} onClose={handleEditClose}>
        <DialogTitle>Edit Task</DialogTitle>
        <DialogContent>
          <TextField
            value={editText}
            onChange={e => setEditText(e.target.value)}
            fullWidth
            variant="outlined"
            margin="normal"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleEditClose} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleEditSave} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  )
}

export default TaskList
