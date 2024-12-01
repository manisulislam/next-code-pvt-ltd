import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout/Layout'
import Home from './components/Home/Home'
import AboutUs from './components/AboutUs/AboutUs'
import Services from './components/Services/Services'


const router= createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/about",
        element:<AboutUs/>
      },
      {
        path:"/services",
        element:<Services/>
      },
      {
        path:"/contact",
        element:<h1>Contact</h1>
      }
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)