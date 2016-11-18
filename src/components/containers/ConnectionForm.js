import { connect } from 'react-redux'
import ConnectionForm from '../presentationals/ConnectionForm'
import * as actions from '../../actions/index'

const mapStateToProps = (state) => {
  return {
    loginIsRequested: state.user.isFetching,
    userIsAuthenticated: state.user.isAuthenticated,
    profile: state.user.profile
  }
}

export default connect(
  mapStateToProps,
  { login: actions.loginUser }
)(ConnectionForm)
