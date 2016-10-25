import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'

import App from './components/app'
import rootReducer from './reducers/index'

const render = () => {
  ReactDOM.render(
    <Provider store={createStore(rootReducer)}>
      <App />
    </Provider>,
    document.getElementById('root')
  )
}

render()
