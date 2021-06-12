import './index.css'

import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import { PersistGate } from 'redux-persist/integration/react'

import { App } from './App'
import { history } from './util'
import { store, persistor } from './store'
import { reportWebVitals } from './reportWebVitals'

// ---

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <BrowserRouter>
        <ConnectedRouter noInitialPop history={history}>
          <React.StrictMode>
            <App />
          </React.StrictMode>
        </ConnectedRouter>
      </BrowserRouter>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
