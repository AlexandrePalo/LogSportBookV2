import React from 'react'
import ReactDOM from 'react-dom'
import configureStore from './configureStore'
import Root from './components/containers/Root'

import $ from 'jquery'
window.jQuery = $
window.$ = $

const store = configureStore()
export default store

const render = () => {
  ReactDOM.render(
    <Root store={store} />,
    document.getElementById('root')
  )
}

render()
