import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import { TemaProvider } from './context/ThemaContext';
import Rascunho from './pages/Rascunho';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Rascunho />,
  },
  {
    path: "/page1",
    element: <Page1 />
  },
  {
    path: "/page2",
    element: <Page2 />,
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TemaProvider>
      <RouterProvider router={router} />
    </TemaProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
