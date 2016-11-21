import { connect } from 'react-redux'
import React, { Component } from 'react'
import ListingTrainings from '../presentationals/ListingTrainings'
import { getAllTrainings } from '../../reducers/index'
import * as actions from '../../actions/index'

class ListingTrainingsL extends Component {
  componentDidMount () {
    this.fetchData()
  }

  fetchData () {
    const { fetchTrainings, userId } = this.props
    fetchTrainings(userId)
  }

  render () {
    let { ...rest } = this.props
    return <ListingTrainings searchData={this.fetchData} {...rest}/>
  }
}

const mapStateToProps = (state) => {
  return {
    trainings: getAllTrainings(state),
    isFetchingTrainings: state.trainings.isFetching,
    userId: state.user.profile.user_id
  }
}

ListingTrainingsL = connect(
  mapStateToProps,
  actions
)(ListingTrainingsL)

export default ListingTrainingsL
