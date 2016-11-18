import { Provider, connect } from 'react-redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import React, { Component, PropTypes } from 'react'

import Layout from './Layout'
import MyAccountL from './MyAccount'
import TrainingBoardL from './TrainingBoard'
import VisibleExerciseBlockBoard from './VisibleExerciseBlockBoard'

import LayoutBegin from '../presentationals/LayoutBegin'
import Begin from '../presentationals/Begin'
import LogOrCreate from '../presentationals/LogOrCreate'

import Settings from './Settings'

import AuthService from '../../utils/AuthService'

const auth = new AuthService(process.env.CLIENT_ID, process.env.BASE_AUTH0)

const requireAuth = (nextState, replace) => {
  if (!auth.loggedIn()) {
    replace({ pathname: '/start/login' })
    return false
  }
  return true
}

class Root extends Component {
  render () {
    const store = this.props.store
    return (
      <Provider store={store}>
        <Router history={browserHistory}>

          <Route path='/start' component={LayoutBegin}>
            <IndexRoute component={Begin}/>
            <Route path='/start/login' component={LogOrCreate}/>
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
          </Route>
        </Router>
      </Provider>
    )
  }
}

Root.propTypes = {
  store: PropTypes.object.isRequired
}

Root = connect(
  null,
  null
)(Root)

export default Root
