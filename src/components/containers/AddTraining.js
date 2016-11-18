import { connect } from 'react-redux'
import AddTraining from '../presentationals/AddTraining'
import * as actions from '../../actions/index'

const mapStateToProps = (state) => {
  return {
    userId: state.user.profile.user_id
  }
}

export default connect(
  mapStateToProps,
  { addTraining: actions.addTraining }
)(AddTraining)
