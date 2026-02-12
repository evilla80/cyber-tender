import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter } from 'react-router-dom';
import App from './App.jsx'
import './index.css'

/**
 * Avviene il Mounting dell'applicazione del DOM del browser,
 * viene creata la radice (root) dell'albero
 */
createRoot(document.getElementById('root')).render(
  <StrictMode>
      <HashRouter>
          <App />
      </HashRouter>
  </StrictMode>,
)
