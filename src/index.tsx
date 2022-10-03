import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';

const element = document.getElementById('root');

if (element) {
  const root = createRoot(element);

  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
} else {
  throw new Error("Page doesn't have #root element");
}
