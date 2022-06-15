import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './Components/App'
import { Provider } from "react-redux";
import { store } from "../js/store/store"

// localStorage.setItem('favorite cities', JSON.stringify(['Oslo', 'Sibiu', 'El-Tor']))

ReactDOM.createRoot(document.getElementById('root'))
  .render(
    <Provider store={store}>
      <App />
    </Provider>
  )