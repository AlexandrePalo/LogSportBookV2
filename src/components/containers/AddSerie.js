import { connect } from 'react-redux'
import AddSerie from '../presentationals/AddSerie'

const mapStateToProps = (state) => {
  return {
    id: state.visibilityFilterTraining,
    exerciseBlockId: state.visibilityFilterExerciseBlock
  }
}
export default connect(
  mapStateToProps,
  null
)(AddSerie)
