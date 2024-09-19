import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { ContextTodods } from './context/ContextTodos.jsx'

createRoot(document.getElementById('root')).render(
  <ContextTodods>
    <App />
  </ContextTodods>
    
)
