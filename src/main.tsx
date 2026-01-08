import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'  // <-- BU SATIR ÇOK ÖNEMLİ, BU YOKSA RENKLER GELMEZ

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)