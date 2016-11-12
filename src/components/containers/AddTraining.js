import { connect } from 'react-redux'
import AddTraining from '../presentationals/AddTraining'
import * as actions from '../../actions/index'

export default connect(
  null,
  { addTraining: actions.addTraining }
)(AddTraining)
