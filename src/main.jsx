import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { Input } from './form.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Input />
    <App />
  </StrictMode>,
)
