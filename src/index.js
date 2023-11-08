import React from 'react';
import * as ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import './index.css';
import Root from './Root';
import Error from "./components/Error.js";
import Professors from "./components/Professors.js";
import Projects from "./components/Projects.js";
import SingleProf from "./components/SingleProf.js"
import News from "./components/News.js";
import Login from "./components/Login.js";
import Forum from "./components/Forum.js";
import Register from './components/Register.js';
import Contact from './components/Contact.js';
import Profile from './components/Profile.js'
import reportWebVitals from './reportWebVitals';
import Test from './components/test.js';
import ResetPass from './components/ResetPass.js';
import Verify from './components/verify.js';
import { LabLinkProvider } from './LabLinkProvider.js';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
  },
  {
    path: "Professors",
    element: <Professors />,
  },
  {
    path: "Projects",
    element: <Projects />,
  },
  {
    path: "news",
    element: <News />,
  },
  {
    path: "SingleProf",
    element: <SingleProf />,
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
  },
  {
    path: "Test",
    element: <Test />,
  },
  {
    path: "ResetPass",
    element: <ResetPass />,
  },
  {
    path: "Verify",
    element: <Verify />,
  },
  {
    path: "Profile",
    element: <Profile />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <LabLinkProvider>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </LabLinkProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
