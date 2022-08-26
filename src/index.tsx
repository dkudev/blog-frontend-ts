import React from 'react';
import { createRoot } from "react-dom/client";
import App from './admin/App';
import reportWebVitals from './reportWebVitals';
import { AuthProvider } from './context/Auth';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

const rootElement = document.getElementById("root");

/**
 * TS2345: Argument of type 'HTMLElement | null' is not assignable to parameter of type 'Element | DocumentFragment'.   Type 'null' is not assignable to type 'Element | DocumentFragment'.
 * add ! after rootElement to become rootElement!
 * to bypass the error
 */
const rootComponent = createRoot(rootElement!);

rootComponent.render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <AuthProvider>
          <App />
        </AuthProvider>
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
