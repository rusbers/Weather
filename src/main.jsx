import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './Components/App'
import { Provider } from "react-redux";
import { store } from "../js/store/store";

// weather-content - here will be shown the Help page

ReactDOM.createRoot(document.getElementById('root'))
  .render(
    <Provider store={store}>
      <App />
    </Provider>
  )
