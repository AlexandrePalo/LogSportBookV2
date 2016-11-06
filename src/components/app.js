import React, { Component } from 'react';
import VisibleTrainingBoard from './containers/VisibleTrainingBoard'
import VisibleExerciseBlockBoard from './containers/VisibleExerciseBlockBoard'
import moment from 'moment'
import { connect }from 'react-redux'

import Header from './presentationals/Header'

const mapStateToProps = (state) => {
  return {
    visibilityFilterExerciseBlock: state.visibilityFilterExerciseBlock
  }
}
class App extends Component {
  onClickSettings () {
    console.log("on click settings")
  }

  render () {
    let props = this.props
    return (
      <div>
        <div>
          <Header
          first_name="Alexandre"
          avatar="LogoAlex"
          onClickSettings={this.onClickSettings}/>
          <div className="container">
            <div className='col-12-md'>
            <div className="row">
              <VisibleTrainingBoard />
            </div>
            {
            (props.visibilityFilterExerciseBlock !== 0)
            ? (<div className="row">
              <VisibleExerciseBlockBoard />
            </div>)
            : (<div></div>)
            }
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  null
)(App)
