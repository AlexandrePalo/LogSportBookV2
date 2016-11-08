import TrainingBoard from '../presentationals/TrainingBoard'
import { connect } from 'react-redux'
import { getVisibleTraining } from '../../reducers/index'
import { getAllExerciseBlocksOneTraining } from '../../reducers/index'

const mapStateToProps = (state, ownProps) => {
  console.log('render')
  console.log(state)
  const training = getVisibleTraining(state, ownProps.id)
  return {
    description: training.description,
    exerciseBlocks: getAllExerciseBlocksOneTraining(state, training.id)
  }
}

const VisibleTrainingBoard = connect(
  mapStateToProps,
  null
)(TrainingBoard)

export default VisibleTrainingBoard
