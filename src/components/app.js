import React, { Component } from 'react';
import VisibleTrainingBoard from './containers/VisibleTrainingBoard'
import VisibleExerciseBlockBoard from './containers/VisibleExerciseBlockBoard'
import moment from 'moment'

import Header from './presentationals/Header'

export default class App extends Component {
  onClickSettings () {
    console.log("on click settings")
  }

  render () {
    return (
      <div>
        <div>
          <Header
          first_name="Alexandre"
          avatar="LogoAlex"
          onClickSettings={this.onClickSettings}/>
          <div className="container">
            <div className="row">
              <VisibleTrainingBoard />
            </div>
            <div className="row">
              <VisibleExerciseBlockBoard />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
