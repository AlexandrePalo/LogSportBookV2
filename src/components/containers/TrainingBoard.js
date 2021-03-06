import TrainingBoard from '../presentationals/TrainingBoard'
import { connect } from 'react-redux'
import React, { Component } from 'react'
import { getVisibleTraining } from '../../reducers/index'
import { getAllExerciseBlocksOneTraining } from '../../reducers/index'
import * as actions from '../../actions/index'

class TrainingBoardL extends Component {
  render () {
    let { ...rest } = this.props
    return <TrainingBoard {...rest}/>
  }
}

const mapStateToProps = (state, ownProps) => {
  const training = getVisibleTraining(state, ownProps.params.training)
  return {
    trainingId: training.id,
    description: training.description,
    exerciseBlocks: getAllExerciseBlocksOneTraining(state, training.id),
    isFetchingExerciseBlocks: training.exerciseBlocks.isFetching
  }
}

TrainingBoardL = connect(
  mapStateToProps,
  actions
)(TrainingBoardL)

export default TrainingBoardL
