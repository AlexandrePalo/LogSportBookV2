import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router'
import React, { PropTypes } from 'react'
import App from '../app'

const Root = ({ store }) => (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/training/:training' component={App}>
        <Route path='exerciseBlock/:exerciseBlock' component={App} />
      </Route>
    </Router>
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired,
}

export default Root
