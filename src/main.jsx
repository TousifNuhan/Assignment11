import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './Home/Home.jsx';


import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import Root from './Layouts/Root.jsx';
import Assignments from './Others/Assignments.jsx';
import CreateAssignment from './Others/CreateAssignment.jsx';
import PendingAssignment from './Others/PendingAssignment.jsx';
import MySubmittedAssignments from './Others/MySubmittedAssignments.jsx';
import Login from './Login/Login.jsx';
import Register from './Register/Register.jsx';
import AuthProvider from './Providers/AuthProvider.jsx';
import PrivateRoute from './Routes/PrivateRoute.jsx';
import { Toaster } from 'react-hot-toast';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: "/assignments",
        element: <PrivateRoute><Assignments></Assignments></PrivateRoute>
      },
      {
        path: '/createAssignment',
        element: <CreateAssignment></CreateAssignment>
      },
      {
        path: '/pendingAssignment',
        element: <PendingAssignment></PendingAssignment>
      },
      {
        path: '/mySubmittedAssignments',
        element: <MySubmittedAssignments></MySubmittedAssignments>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      }

    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
      <Toaster position='top-center'/>
    </AuthProvider>
  </StrictMode>,
)
