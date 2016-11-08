import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router'
import React, { PropTypes } from 'react'
import App from '../app'

const Root = ({ store }) => (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/' component={App} />
    </Router>
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired,
}

export default Root
