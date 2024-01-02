import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Global CSS
import App from './App'; // Main App component
import { BrowserRouter } from 'react-router-dom'; // React Router
import { Provider } from 'react-redux'; // Redux Provider
import store from './Redux/store.js'; // Redux store

// Creating a root element in the DOM
const root = ReactDOM.createRoot(document.getElementById('root'));

// Rendering the application
root.render(
  <React.StrictMode>
    {/* Provider makes Redux store available to any nested components */}
    <Provider store={store}>

      {/* BrowserRouter enables navigation and routing in the application */}
      <BrowserRouter>

        {/* Main App component is rendered here */}
        <App />
        
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
