import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Grafico from './Grafico.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Grafico />
  </StrictMode>,
)
