import ExerciseBlockBoard from '../presentationals/ExerciseBlockBoard'
import { connect } from 'react-redux'
import { getAllExerciseBlocksOneTraining } from '../../reducers/index'
import { getAllSeriesOneExerciseBlock } from '../../reducers/index'

const mapStateToProps = (state) => {
  const exerciseBlock = state.trainings.byId[state.visibilityFilterTraining].exerciseBlocks.byId[state.visibilityFilterExerciseBlock]
  return {
    id: exerciseBlock.id,
    trainingId: state.visibilityFilterTraining,
    name: exerciseBlock.exercise.name,
    series: getAllSeriesOneExerciseBlock(state, state.visibilityFilterTraining, state.visibilityFilterExerciseBlock)
  }
}

const VisibleExerciseBlockBoard = connect(
  mapStateToProps,
  null
)(ExerciseBlockBoard)

export default VisibleExerciseBlockBoard
