import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers/index'
import promise from 'redux-promise'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'

// Store
const configureStore = () => {

  const middlewares = [thunk, promise]

  // log if not prod
  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(createLogger())
  }

  const store = createStore(
    rootReducer,
    applyMiddleware(...middlewares)
  )
  return store
}

export default configureStore
