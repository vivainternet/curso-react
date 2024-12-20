import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
/* import 'bootstrap/dist/css/bootstrap.min.css'  */ // Descomentar para activar Bootstrap
import './index.css' // reemplazado por bootstrap.
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
