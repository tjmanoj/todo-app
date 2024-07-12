import React from 'react'; // Import React to use JSX
import ReactDOM from 'react-dom'; // Import ReactDOM to render the React application
import './index.css'; // Import global CSS styles
import App from './App'; // Import App component

// Render the App component into the root element in the HTML
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
