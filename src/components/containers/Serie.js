import { connect } from 'react-redux'
import Serie from '../presentationals/Serie'
import * as actions from '../../actions/index'

export default connect(
  null,
  { removeSerie: actions.removeSerie }
)(Serie)
