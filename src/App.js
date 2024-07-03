import React from 'react'
import {Provider} from 'react-redux'
import store from './store'
import TaskInput from './components/TaskInput'
import TaskList from './components/TaskList'
import {Container, Typography} from '@mui/material'
import './App.css'

const App = () => {
  return (
    <Provider store={store}>
      <Container maxWidth="sm">
        <Typography variant="h2" align="center" gutterBottom>
          Todo List
        </Typography>
        <TaskInput />
        <TaskList />
      </Container>
    </Provider>
  )
}

export default App
