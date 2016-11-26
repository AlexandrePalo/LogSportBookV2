import { connect } from 'react-redux'
import React, { Component } from 'react'
import MyAccount from '../presentationals/MyAccount'
import { getAllTrainings } from '../../reducers/index'
import * as actions from '../../actions/index'

class MyAccountL extends Component {
  componentDidMount () {
    this.fetchData()
  }

  fetchData () {
    const { fetchTrainings, userId, fetchUser } = this.props
    fetchTrainings(userId, 5)
  }

  render () {
    let { ...rest } = this.props
    return <MyAccount {...rest}/>
  }
}

const mapStateToProps = (state) => {
  return {
    trainings: getAllTrainings(state),
    isFetchingTrainings: state.trainings.isFetching,
    userId: state.user.profile.user_id
  }
}

MyAccountL = connect(
  mapStateToProps,
  actions
)(MyAccountL)

export default MyAccountL
