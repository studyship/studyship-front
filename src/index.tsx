import React from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker'
import App from './Components/App'
import { Provider } from 'react-redux'
import store from './store/configurerStore'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
)

serviceWorker.unregister()
