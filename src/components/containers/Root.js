import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import React, { PropTypes } from 'react'

import Layout from './Layout'
import MyAccountL from './MyAccount'
import TrainingBoardL from './TrainingBoard'
import VisibleExerciseBlockBoard from './VisibleExerciseBlockBoard'

import LayoutBegin from '../presentationals/LayoutBegin'
import Begin from '../presentationals/Begin'
import LogOrCreate from '../presentationals/LogOrCreate'

import Settings from './Settings'

import Login from '../presentationals/Login'
import AuthService from '../../utils/AuthService'

const auth = new AuthService('yoZpCbGsAxzrisPVmskO1h4UPliN6wl6', 'lsb.eu.auth0.com')
import store from '../../index'

const requireAuth = (nextState, replace) => {
  if (nextState.location.hash) {
    const hashString = nextState.location.hash
    const idString = '&id_token'
    const firstIndex = hashString.indexOf(idString) + idString.length + 1
    const lastIndex = hashString.indexOf('&token_type=')
    localStorage.setItem('id_token', hashString.substring(firstIndex, lastIndex))
  }
  if (!auth.loggedIn()) {
    replace({ pathname: '/login' })
    return false
  }
  return true
}

const Root = ({ store }) => (
  <Provider store={store}>
    <Router history={browserHistory}>

      <Route path='/start' component={LayoutBegin}>
        <IndexRoute component={Begin}/>
        <Route path='/start/log' component={LogOrCreate}/>
      </Route>

      <Route path='/' component={Layout} auth={auth}>

        <IndexRoute component={MyAccountL} onEnter={requireAuth}/>
        <Route path='/trainings/:training' component={TrainingBoardL}>
          <IndexRoute/>
          <Route path='/trainings/:training/exerciseblocks/:exerciseBlock'
            component={VisibleExerciseBlockBoard}
            onEnter={requireAuth}/>
        </Route>
        <Route path='settings' component={Settings} onEnter={requireAuth}/>
        <Route path='/login' component={Login}/>
      </Route>
    </Router>
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired,
}

export default Root
