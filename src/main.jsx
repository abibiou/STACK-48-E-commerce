import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.jsx'
import Homme from './Homme.jsx'
import Achat from './Achat.jsx'
import Femme from './Femme.jsx'
import Panier from './Panier.jsx'
import Achattshirtbleu from './Achattshirtbleu.jsx'
import './Achattshirtbleu.css'
import './Panier.css'
import './Homme.css'
import './Femme.css'
import './index.css'
import './achat.css'
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
  {
    path: "/Achat",
    element: <Achat />,
  },
  {
    path: "/Femme",
    element: <Femme />,
  },
  {
    path: "/Panier",
    element: <Panier />,
  },
  {
    path: "/Achattshirtbleu",
    element: <Achattshirtbleu />,
  },


]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
