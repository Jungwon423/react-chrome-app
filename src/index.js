import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js';

const rootElement = document.createElement("div");
rootElement.id = "react-chrome-app";

const globalStyles = document.createElement("style");
globalStyles.innerHTML = `
  #${rootElement.id} {
  position: fixed;
  left: 0;
  top: 0;
  width: 300px;
  height: 100vh;
  background: #ffffff;
  border-right: 1px solid #c2c2c2;
  z-index: 999;
  }
`;
rootElement.appendChild(globalStyles);
document.body.appendChild(rootElement);

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <div>왜 안 되지..?</div>
    <App />
  </React.StrictMode>
);
