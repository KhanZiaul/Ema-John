import React from 'react'
import ReactDOM from 'react-dom/client'
import Shop from "./components/Shop/Shop"
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./components/Home/Home";
import Inventory from './components/Inventory/Inventory';
import Login from './components/Login/Login';
import Orders from './components/Orders/Orders';
import Loader from './components/Loader/Loader';
import CheckOut from './components/CheckOut/CheckOut';
import SignUp from './components/SingnUp/SignUp';
import Authprovider from './components/Authprovider/Authprovider';
import PrivateProvider from './components/PrivateProvider/PrivateProvider';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: '/',
        element: <Shop></Shop>,
        loader: () => fetch('http://localhost:8000/totalProducts')
      },
      {
        path: 'orders',
        element: <Orders></Orders>,
        loader: Loader
      },
      {
        path: 'inventory',
        element: <Inventory></Inventory>
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'register',
        element: <SignUp></SignUp>
      },
      {
        path: 'checkout',
        element: <PrivateProvider> <CheckOut></CheckOut> </PrivateProvider>
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Authprovider>
      <RouterProvider router={router} />
    </Authprovider>
  </React.StrictMode>,
)
