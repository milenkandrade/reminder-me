import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ReminderApp from './ReminderApp.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ReminderApp />
  </StrictMode>,
)
