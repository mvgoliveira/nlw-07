import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './App'
import { AuthContextProvider } from './contexts/AuthContext';
import { GlobalStyle } from './styles/global';

ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
      <GlobalStyle/>
      <App />
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
