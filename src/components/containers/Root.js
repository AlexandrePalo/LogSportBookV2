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

const Root = ({ store }) => (
  <Provider store={store}>
    <Router history={browserHistory}>

      <Route path='/begin' component={LayoutBegin}>
        <IndexRoute component={Begin}/>
        <Route path='/begin/login' component={LogOrCreate}/>
      </Route>

      <Route path='/' component={Layout}>

        <IndexRoute component={MyAccount}/>
        <Route path='/trainings/:training' component={VisibleTrainingBoard}>
          <IndexRoute/>
          <Route path='/trainings/:training/exerciseblocks/:exerciseBlock' component={VisibleExerciseBlockBoard}/>
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
