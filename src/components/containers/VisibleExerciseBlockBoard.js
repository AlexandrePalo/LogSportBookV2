import ExerciseBlockBoard from '../presentationals/ExerciseBlockBoard'
import { connect } from 'react-redux'
import { getAllExerciseBlocksOneTraining } from '../../reducers/index'
import { getAllSeriesOneExerciseBlock } from '../../reducers/index'

const mapStateToProps = (state, ownProps) => {
  const exerciseBlock = state.trainings.byId[ownProps.params.training].exerciseBlocks.byId[ownProps.params.exerciseBlock]
  return {
    name: exerciseBlock.exercise.name,
    series: getAllSeriesOneExerciseBlock(state, ownProps.params.training, exerciseBlock.id)
  }
}

const VisibleExerciseBlockBoard = connect(
  mapStateToProps,
  null
)(ExerciseBlockBoard)

export default VisibleExerciseBlockBoard
