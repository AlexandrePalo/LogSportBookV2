import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import React, { PropTypes } from 'react'
import App from '../app'

import Layout from './Layout'
import VisibleTrainingBoard from './VisibleTrainingBoard'

import LayoutBegin from '../presentationals/LayoutBegin'
import Begin from '../presentationals/Begin'
import LogOrCreate from '../presentationals/LogOrCreate'

import Settings from './Settings'

const Root = ({ store }) => (
  <Provider store={store}>
    <Router history={browserHistory}>

      <Route path='/begin' component={LayoutBegin}>
        <IndexRoute component={Begin}/>
        <Route path='/begin/login' component={LogOrCreate}/>
      </Route>

      <Route path='/' component={Layout}>
        <IndexRoute component={Layout}/>

        <Route path='/trainings/:training' component={VisibleTrainingBoard}>
        </Route>

        <Route path='settings' component={Settings}/>
      </Route>
    </Router>
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired,
}

export default Root
