import React from 'react'
import ReactDOM from 'react-dom'
import configureStore from './configureStore'
import Root from './components/containers/Root'

const store = configureStore()
export default store

const render = () => {
  ReactDOM.render(
    <Root store={store} />,
    document.getElementById('root')
  )
}

render()
