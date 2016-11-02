import TrainingBoard from '../presentationals/TrainingBoard'
import { connect } from 'react-redux'
import { getVisibleTraining } from '../../reducers/index'

const mapStateToProps = (state) => {
  const training = getVisibleTraining(state, state.visibilityFilterTraining)
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
