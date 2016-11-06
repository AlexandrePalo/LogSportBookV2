import { createStore, applyMiddleware } from 'redux'
import { loadState, saveState } from './localStorage'
import throttle from 'lodash/function/throttle'
import rootReducer from './reducers/index'

const configureStore = () => {
  const persistedState = loadState()
  const store = createStore(
    rootReducer,
    persistedState
  )
  store.subscribe(throttle(() => {
    saveState(store.getState())
  }, 1000))

  return store
}

export default configureStore
