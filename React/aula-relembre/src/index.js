import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import Pagina1 from './Pages/Pagina1';
import Pagina2 from './Pages/Pagina2';
import 'bootstrap/dist/css/bootstrap.min.css';
import ExibirNome from './Pages/ExibirNome';

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
  {
    path: "/pagina1",
    element: <Pagina1 />,
  },
  {
    path: "/pagina2",
    element: <Pagina2 />,
  },
  {
    path: "/exibir-nome/:nome",
    element: <ExibirNome />,
  },

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
