import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Post from './App';

export const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Post />
  </React.StrictMode>
);

