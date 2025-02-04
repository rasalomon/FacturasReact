import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { FacturaApp } from './components/FacturaApp'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FacturaApp />
  </StrictMode>,
)
