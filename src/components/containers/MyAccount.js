import { connect } from 'react-redux'
import MyAccount from '../presentationals/MyAccount'
import { getAllTrainings } from '../../reducers/index'

const mapStateToProps = (state) => {
  return {
    trainings: getAllTrainings(state)
  }
}

export default connect(
  mapStateToProps,
  null
)(MyAccount)
