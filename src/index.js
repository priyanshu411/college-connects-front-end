import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; //for tailwind css
import App from './App';
import ErrorPage from './components/ErrorPage';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Notes from './components/student/Notes';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Student from './components/student/Student';
import ProtectedRoute from './components/student/ProtectedRoute';
import Home from './components/Home';
const router = createBrowserRouter([
  {
    path: "/",
    element:<App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <Home></Home>,
      },
      {
        path: "signUp",
        element: <SignUp />,
      },
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
  {
    path :"student",
    element:<ProtectedRoute Component={Student}/>,
    children:[
      {
        path :"notes",
        element:<Notes/>
      }
    ]
  }
]);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <RouterProvider router={router} />
  /* </React.StrictMode> */
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
