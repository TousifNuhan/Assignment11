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
import MappingAssignments from './Others/MappingAssignments.jsx';

import AssignmentDetails from './Others/AssignmentDetails.jsx';
import UpdateAssignment from './Others/UpdateAssignment.jsx';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

//tanstack
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient=new QueryClient()


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
        element: <Assignments></Assignments>,
        loader: () => fetch('http://localhost:5000/createAssignments')
      },
      {
        path: '/createAssignment',
        element: <PrivateRoute><CreateAssignment></CreateAssignment></PrivateRoute>
      },
      {
        path: '/pendingAssignment',
        element: <PrivateRoute><PendingAssignment></PendingAssignment></PrivateRoute>
      },
      {
        path: '/mySubmittedAssignments',
        element: <PrivateRoute><MySubmittedAssignments></MySubmittedAssignments></PrivateRoute>

      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: '/mappingAssignments',
        element: <MappingAssignments></MappingAssignments>
      },
      {
        path: '/updateAssignments/:id',
        element: <PrivateRoute><UpdateAssignment></UpdateAssignment></PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/createAssignments/${params.id}`)
      },
      {
        path: '/assignments/:id',
        element: <PrivateRoute><AssignmentDetails></AssignmentDetails></PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/createAssignments/${params.id}`, { credentials: 'include' })
      },
      {

      }

    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <Toaster position='top-center' />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </AuthProvider>
  </StrictMode>,
)
