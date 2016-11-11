import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers/index'

// Logging states and action
const logger = (store) => (next) => {
  if (!console.group) {
    return next
  }
  return (action) => {
    console.group(action.type)
    console.log('%c prev state', 'color: gray', store.getState())
    console.log('%c action', 'color: blue', action)
    const returnValue = next(action)
    console.log('%c next state', 'color: green', store.getState())
    console.groupEnd(action.type)
    return returnValue
  }
}

// Accept promises
const promiseSupporter = (store) => (next) => (action) => {
  if (typeof action.then === 'function') {
    return action.then(next)
  }
  return next(action)
}

const wrapDispatchWithMiddlewares = (store, middlewares) => {
  middlewares.slice().reverse().forEach(middleware =>
    store.dispatch = middleware(store)(store.dispatch)
  )
}

// Store
const configureStore = () => {
  const store = createStore(
    rootReducer
  )

  const middlewares = [promiseSupporter]
  // log if not prod
  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(logger)
  }

  wrapDispatchWithMiddlewares(store, middlewares)

  return store
}

export default configureStore
