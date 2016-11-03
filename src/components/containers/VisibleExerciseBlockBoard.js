import ExerciseBlockBoard from '../presentationals/ExerciseBlockBoard'
import { connect } from 'react-redux'
import { getAllExerciseBlocksOneTraining } from '../../reducers/index'

const mapStateToProps = (state) => {
  const exerciseBlock = state.trainings.byId[state.visibilityFilterTraining].exerciseBlocks.byId[state.visibilityFilterExerciseBlock]
  return {
    id: exerciseBlock.id,
    name: exerciseBlock.exercise.name,
    series: exerciseBlock.series
  }
}

const VisibleExerciseBlockBoard = connect(
  mapStateToProps,
  null
)(ExerciseBlockBoard)

export default VisibleExerciseBlockBoard
