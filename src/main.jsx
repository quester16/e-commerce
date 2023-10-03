import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/app/App.jsx'
import {Provider} from "react-redux";

import './index.scss'
import 'bootstrap/dist/css/bootstrap.min.css';

import store from "./store/store.js";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
  </React.StrictMode>,
)
