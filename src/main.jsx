import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { FacturaApp } from './FacturaApp'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FacturaApp />
  </StrictMode>,
)
