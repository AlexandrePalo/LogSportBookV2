import { connect } from 'react-redux'
import AddExerciseBlock from '../presentationals/AddExerciseBlock'

const mapStateToProps = (state) => {
  return {
    exercises: state.exercises
  }
}
export default connect(
  mapStateToProps,
  null
)(AddExerciseBlock)
