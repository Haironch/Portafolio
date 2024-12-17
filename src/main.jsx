import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
// Importa el archivo CSS
import './App.css'  // Añade esta línea

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)