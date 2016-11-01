import TrainingBoard from '../presentationals/TrainingBoard'
import { connect } from 'react-redux'

const getVisibleTraining = (trainings, filter) => {
  // TODO: will be easier with id and correct shape of store
  return trainings.filter(
    t => t.id == filter
  )[0]
}

const mapStateToProps = (state) => {
  const training = getVisibleTraining(state.trainings, state.visibilityFilter)
  return {
    id: training.id,
    description: training.description,
    exerciseBlocks: training.exerciseBlocks
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAdd: (exercise) =>{
      dispatch({
        type: 'ADD_EXERCISEBLOCK',
        exercise,
        id: 1
      })
    }
  }
}

const VisibleTrainingBoard = connect(
  mapStateToProps,
  mapDispatchToProps
)(TrainingBoard)

export default VisibleTrainingBoard
