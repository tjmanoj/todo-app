import React from 'react'; // Import React to use JSX
import { Provider } from 'react-redux'; // Import Provider to connect the app to Redux
import store from './store'; // Import the Redux store
import TaskInput from './components/TaskInput'; // Import TaskInput component
import TaskList from './components/TaskList'; // Import TaskList component
import { Container, Typography } from '@mui/material'; // Import Material-UI components
import './App.css'; // Import CSS for styling

/**
 * Main application component
 * - Wraps the entire application with Redux Provider to make the store available to all components
 */
const App = () => {
  return (
    // Provider makes the Redux store available to any nested components that need to access the Redux store
    <Provider store={store}>
      {/* Container is a Material-UI component that centers the content and adds padding */}
      <Container maxWidth="sm">
        {/* Typography is a Material-UI component for text styling */}
        <Typography variant="h2" align="center" gutterBottom>
          Todo List
        </Typography>
        {/* TaskInput component allows users to add new tasks */}
        <TaskInput />
        {/* TaskList component displays the list of tasks */}
        <TaskList />
      </Container>
    </Provider>
  );
};

export default App; // Export the App component as default
