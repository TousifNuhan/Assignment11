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
import { patch } from '@mui/material';
import CreateAssignment from './Others/CreateAssignment.jsx';
import PendingAssignment from './Others/PendingAssignment.jsx';
import MySubmittedAssignments from './Others/MySubmittedAssignments.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root> ,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:"/assignments",
        element:<Assignments></Assignments>
      },
      {
        path:'/createAssignment',
        element:<CreateAssignment></CreateAssignment>
      },
      {
        path:'/pendingAssignment',
        element:<PendingAssignment></PendingAssignment>
      },
      {
        path:'/mySubmittedAssignments',
        element:<MySubmittedAssignments></MySubmittedAssignments>
      }

    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
