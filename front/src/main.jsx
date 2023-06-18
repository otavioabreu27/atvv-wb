import React from 'react'
import ReactDOM from 'react-dom/client'
import { Clientes } from './pages/Clientes';
import { Cliente } from './pages/Cliente';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/clientes",
    element: <Clientes />,
  },
  {
    path: "/clientes/:id",
    element: <Cliente />
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
