import { connect } from 'react-redux'
import Training from '../presentationals/Training'
import * as actions from '../../actions/index'

export default connect(
  null,
  { removeTraining: actions.removeTraining }
)(Training)
