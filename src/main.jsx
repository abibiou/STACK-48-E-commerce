import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.jsx'
import Homme from './Homme.jsx'
import './Homme.css'
import './index.css'
import './promo.css'
import './navbar.css'
import './tendance.css'
import './boutonvestshortetc.css'
import './sastifactionclientetc.css'
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/Homme",
    element: <Homme />,
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
