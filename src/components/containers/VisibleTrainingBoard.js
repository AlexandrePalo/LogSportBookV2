import TrainingBoard from '../presentationals/TrainingBoard'
import { connect } from 'react-redux'
import { getVisibleTraining2 } from '../../reducers/index'

const mapStateToProps = (state) => {
  const training = getVisibleTraining2(state, state.visibilityFilter)
  return {
    id: training.id,
    description: training.description,
    exerciseBlocks: training.exerciseBlocks
  }
}

const VisibleTrainingBoard = connect(
  mapStateToProps,
  null
)(TrainingBoard)

export default VisibleTrainingBoard
