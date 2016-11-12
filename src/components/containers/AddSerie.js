import { connect } from 'react-redux'
import AddSerie from '../presentationals/AddSerie'
import * as actions from '../../actions/index'

export default connect(
  null,
  { addSerie: actions.addSerie }
)(AddSerie)
