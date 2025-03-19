import React from 'react';
import ReactDOM from 'react-dom/client'; // Note the change to 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import App from './App';

// Create a root using createRoot
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the app using the new root API
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);