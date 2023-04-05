import React from 'react'
import ReactDOM from 'react-dom/client'
import FetchData from "./components/FetchData/Fetch"
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./components/Home/Home";
import OrderReview from "./components/OrderReview/OrderReview";
import ManageInventory from './components/MnageInventory/ManageInventory';
import Login from './components/Login/Login';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Home></Home>,
    children: [
      {
        path:'order',
        element:<FetchData></FetchData>
      },
      {
        path:'order_review',
        element:<OrderReview></OrderReview>
      },
      {
        path:'manage_inventory',
        element:<ManageInventory></ManageInventory>
      },
      {
        path:'login',
        element:<Login></Login>
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
       <RouterProvider router={router} />
  </React.StrictMode>,
)
