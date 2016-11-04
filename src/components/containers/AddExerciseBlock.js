import { connect } from 'react-redux'
import AddExerciseBlock from '../presentationals/AddExerciseBlock'
import { getAllExercises } from '../../reducers/index'

const mapStateToProps = (state) => {
  return {
    byId: state.exercises.byId,
    exercises: getAllExercises(state),
    id: state.visibilityFilterTraining
  }
}
export default connect(
  mapStateToProps,
  null
)(AddExerciseBlock)
