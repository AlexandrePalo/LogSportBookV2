import { connect } from 'react-redux'
import AddExerciseBlock from '../presentationals/AddExerciseBlock'
import { getAllExercises } from '../../reducers/index'

const mapStateToProps = (state) => {
  return {
    exercises: getAllExercises(state)
  }
}
export default connect(
  mapStateToProps,
  null
)(AddExerciseBlock)
