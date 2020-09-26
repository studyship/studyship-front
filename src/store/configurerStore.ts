import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './modules'

const env = process.env.NODE_ENV

const middleware = [thunk]

if (env === 'development') {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const { logger } = require('redux-logger')
  middleware.push(logger)
}

const store = createStore(rootReducer, applyMiddleware(...middleware))

export default store
