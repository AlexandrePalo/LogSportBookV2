import { connect } from 'react-redux'
import ExerciseBlock from '../presentationals/ExerciseBlock'
import * as actions from '../../actions/index'

const mapStateToProps = (state) => {
  return {
    visibilityFilterExerciseBlock: state.visibilityFilterExerciseBlock
  }
}
export default connect(
  mapStateToProps,
  { removeExerciseBlock: actions.removeExerciseBlock }
)(ExerciseBlock)
