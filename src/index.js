import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Router } from 'react-router-dom'
import './index.css'
import App from './App/index.js'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)

