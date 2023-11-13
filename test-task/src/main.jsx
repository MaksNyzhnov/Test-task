import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store, {persistor} from './Redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import App from './Components/App';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename='/'>
      <Provider store={store}>
        <PersistGate loading={<div>loading...</div>} persistor={persistor}>
        <App />
      </PersistGate>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
)
