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
    const { fetchTrainings, requestTrainings, userId } = this.props
    requestTrainings()
    fetchTrainings(userId)
  }

  render () {
    let { ...rest } = this.props
    return <MyAccount {...rest}/>
  }
}

const mapStateToProps = (state) => {
  return {
    trainings: getAllTrainings(state),
    userId: state.user.id
  }
}

MyAccountL = connect(
  mapStateToProps,
  actions
)(MyAccountL)

export default MyAccountL
