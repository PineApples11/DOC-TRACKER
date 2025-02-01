import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Routes } from './Components/Pages.jsx/Routes.jsx'


const router = createBrowserRouter(Routes)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    <RouterProvider router={router} />
    
  </StrictMode>,
)
