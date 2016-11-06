import { connect } from 'react-redux'
import Serie from '../presentationals/Serie'

const mapStateToProps = (state) => {
  return {
    exerciseBlockId: state.visibilityFilterExerciseBlock,
    trainingId: state.visibilityFilterTraining
  }
}
export default connect(
  mapStateToProps,
  null
)(Serie)
