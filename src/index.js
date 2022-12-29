import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import Root from "./components/Root";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Jokes from "./components/Jokes";

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
    {
        path: "/",
        element: <Root/>,
        children: [
            {
                path: "about",
                element: <About/>,
            },
            {
                path: "contact",
                element: <Contact/>,
            },
            {
                path: "tasks",
                element: <App/>,
            },
            {
                path: "jokes",
                element: <Jokes/>,
            },
        ],
    },
]);
root.render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
