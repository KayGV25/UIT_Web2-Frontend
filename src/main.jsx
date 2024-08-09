import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import IndexPage from './pages/IndexPage';
import ErrorPage from './pages/ErrorPage';
import Root from './Root';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import UploadPage from './pages/UploadPage';
import RecipePage from './pages/RecipePage';
import Loading from './components/Loading';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "",
        element: <IndexPage />
      },
      {
        path: "/recipes/:id",
        element: <RecipePage />
      },
      {
        path: "/upload",
        element: <UploadPage />
      }
    ],
  },
  {
    path: "/login",
    element: <LoginPage/>,
  },
  {
    path: "/signup",
    element: <SignUpPage/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} fallbackElement={<Loading/>}/>
  </React.StrictMode>
)
