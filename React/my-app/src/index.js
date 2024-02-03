import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Pagina1 from './Pagina1';
import Home from './home';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';
import ErroPage from './ErroPage';


const router = createBrowserRouter([

  {
    path: "/Batata",
    element:<Home />,
  },
  {
    path: "/pagina1/:Email",
    element: <Pagina1 />,
    errorElement: <ErroPage />
  },
  {
    path: "*",
    element: <div>404</div>
  }
  

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
