import React from 'react';
import * as ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import './index.css';
import Root from './Root';
import Error from "./components/Error.js";
import News from "./components/News.js"
import Login from "./components/Login.js";
import Forum from "./components/Forum.js";
import Register from './components/Register.js';
import Contact from './components/Contact.js'
import reportWebVitals from './reportWebVitals';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
  },
  {
    path: "news",
    element: <News />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "Forum",
    element: <Forum />,
  },
  {
    path: "Register",
    element: <Register />,
  },
  {
    path: "Contact",
    element: <Contact />,
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
