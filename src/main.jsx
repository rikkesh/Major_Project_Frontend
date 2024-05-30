import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Auth0Provider } from '@auth0/auth0-react';


ReactDOM.createRoot(document.getElementById('root')).render(
  <Auth0Provider
    domain="dev-oxqo2l4bt6vn4ve6.us.auth0.com"
    clientId="s7Nr9Oz8LR9itdufqBbDCMUH5C3uILzM"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <React.StrictMode>
    <App />
  </React.StrictMode>,
  
  </Auth0Provider>,
)
