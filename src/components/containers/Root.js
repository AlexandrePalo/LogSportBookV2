import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import React, { PropTypes } from 'react'
import App from '../app'

import Layout from './Layout'
import MyAccount from './MyAccount'
import VisibleTrainingBoard from './VisibleTrainingBoard'
import VisibleExerciseBlockBoard from './VisibleExerciseBlockBoard'

import LayoutBegin from '../presentationals/LayoutBegin'
import Begin from '../presentationals/Begin'
import LogOrCreate from '../presentationals/LogOrCreate'

import Settings from './Settings'

import Login from '../presentationals/Login'
import AuthService from '../../utils/AuthService'

const auth = new AuthService('yoZpCbGsAxzrisPVmskO1h4UPliN6wl6', 'lsb.eu.auth0.com')

const requireAuth = (nextState, replace) => {
  console.log('logged in', auth.loggedIn())
  //because the page can't set the id token fast enough, check the nextState to see if the hash exists
  //if it does exist then grab the id token from the hash and then set it to local storage
  if (nextState.location.hash) {
    //you can use regex here, it would be a lot more efficent
    const hashString = nextState.location.hash
    const idString = '&id_token'
    const firstIndex = hashString.indexOf(idString) + idString.length + 1
    const lastIndex = hashString.indexOf('&token_type=')
    console.log(hashString.substring(firstIndex, lastIndex))
    localStorage.setItem('id_token', hashString.substring(firstIndex, lastIndex))
  }
  if (!auth.loggedIn()) {
    console.log(nextState, 'nextState', replace, 'replace')
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

        <IndexRoute component={MyAccount} onEnter={requireAuth}/>
        <Route path='/trainings/:training' component={VisibleTrainingBoard}>
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
