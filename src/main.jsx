import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import StopWatch from './StopWatch.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <StopWatch />
  </StrictMode>,
)
