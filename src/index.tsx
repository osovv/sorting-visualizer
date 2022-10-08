import { App } from 'app';
import React from 'react';
import { createRoot } from 'react-dom/client';

const element = document.querySelector('#root');

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
