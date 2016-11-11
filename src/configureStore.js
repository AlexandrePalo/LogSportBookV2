import { createStore, applyMiddleware } from 'redux'
import { loadState, saveState } from './localStorage'
import throttle from 'lodash/function/throttle'
import rootReducer from './reducers/index'

// Logging states and action
const addLoggingToDispatch = (store) => {
  const rawDispatch = store.dispatch
  if (!console.group) {
    return rawDispatch
  }

  return (action) => {
    console.group(action.type)
    console.log('%c prev state', 'color: gray', store.getState())
    console.log('%c action', 'color: blue', action)
    const returnValue = rawDispatch(action)
    console.log('%c next state', 'color: green', store.getState())
    console.groupEnd(action.type)
    return returnValue
  }
}

// Store
const configureStore = () => {
  const persistedState = loadState()
  const store = createStore(
    rootReducer,
    persistedState
  )

  // log
  if (process.env.NODE_ENV !== 'production') {
    store.dispatch = addLoggingToDispatch(store)
  }
  store.subscribe(throttle(() => {
    saveState(store.getState())
  }, 1000))

  return store
}

export default configureStore
