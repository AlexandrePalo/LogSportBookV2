import ExerciseBlockBoard from '../presentationals/ExerciseBlockBoard'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getAllExerciseBlocksOneTraining } from '../../reducers/index'
import { getAllSeriesOneExerciseBlock } from '../../reducers/index'
import * as actions from '../../actions/index'

class ExerciseBlockBoardL extends Component {

  render () {
    let { ...rest } = this.props
    return <ExerciseBlockBoard {...rest}/>
  }
}

const mapStateToProps = (state, ownProps) => {
  const exerciseBlock = state.trainings.byId[ownProps.params.training].exerciseBlocks.byId[ownProps.params.exerciseBlock]
  return {
    isFetchingSeries: exerciseBlock.series.isFetching,
    name: exerciseBlock.exercise.name,
    series: getAllSeriesOneExerciseBlock(state, ownProps.params.training, exerciseBlock.id)
  }
}

ExerciseBlockBoardL = connect(
  mapStateToProps,
  actions
)(ExerciseBlockBoardL)

export default ExerciseBlockBoardL
