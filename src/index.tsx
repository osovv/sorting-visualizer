import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from 'app';

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
