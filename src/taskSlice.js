import {createSlice} from '@reduxjs/toolkit'

const taskSlice = createSlice({
  name: 'tasks',
  initialState: JSON.parse(localStorage.getItem('tasks')) || [],
  reducers: {
    addTask: (state, action) => {
      state.push({text: action.payload, completed: false})
      localStorage.setItem('tasks', JSON.stringify(state))
    },
    deleteTask: (state, action) => {
      const newState = state.filter((_, index) => index !== action.payload)
      localStorage.setItem('tasks', JSON.stringify(newState))
      return newState
    },
    editTask: (state, action) => {
      const {index, newText} = action.payload
      state[index].text = newText
      localStorage.setItem('tasks', JSON.stringify(state))
    },
    toggleComplete: (state, action) => {
      state[action.payload].completed = !state[action.payload].completed
      localStorage.setItem('tasks', JSON.stringify(state))
    },
  },
})

export const {addTask, deleteTask, editTask, toggleComplete} = taskSlice.actions
export default taskSlice.reducer
