import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import UserData from './UserData.jsx';
import App from './App.jsx';  

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserData />  
    {/* <App /> */}
  </StrictMode>,
)
