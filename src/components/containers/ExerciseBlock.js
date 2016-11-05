import { connect } from 'react-redux'
import ExerciseBlock from '../presentationals/ExerciseBlock'

const mapStateToProps = (state) => {
  return {
    visibilityFilterExerciseBlock: state.visibilityFilterExerciseBlock
  }
}
export default connect(
  mapStateToProps,
  null
)(ExerciseBlock)
