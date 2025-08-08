import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'

// Initialize AOS
import AOS from 'aos'
import 'aos/dist/aos.css'

// Initialize AOS on app load
AOS.init({
  duration: 700,
  easing: 'ease-in-out',
  once: true,
  delay: 60
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
