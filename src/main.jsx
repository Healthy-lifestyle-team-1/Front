import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import ThemeProvider from './core/theme/ThemeProvider';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
