import { connect } from 'react-redux'
import ExerciseBlock from '../presentationals/ExerciseBlock'
import * as actions from '../../actions/index'

export default connect(
  null,
  { removeExerciseBlock: actions.removeExerciseBlock }
)(ExerciseBlock)
