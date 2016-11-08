import React, { Component } from 'react';
import VisibleTrainingBoard from './containers/VisibleTrainingBoard'
import VisibleExerciseBlockBoard from './containers/VisibleExerciseBlockBoard'
import Header from './presentationals/Header'
import AddTraining from './containers/AddTraining'
import moment from 'moment'
import { connect }from 'react-redux'

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
          first_name='Alexandre'
          avatar="LogoAlex"
          onClickSettings={this.onClickSettings}/>
          <div className="container">
            {
              props.params.training
              ? (
                  <div className='col-md-12'>
                    <div className="row">
                      <VisibleTrainingBoard id={props.params.training}/>
                    </div>
                    {
                    props.params.exerciseBlock
                    ? (<div className="row">
                      <VisibleExerciseBlockBoard trainingId={props.params.training} id={props.params.exerciseBlock}/>
                    </div>)
                    : (<div></div>)
                    }
                  </div>
              )
              : (
                <div className='col-md-4 col-md-offset-4'>
                  <AddTraining />
                </div>
              )
            }

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
