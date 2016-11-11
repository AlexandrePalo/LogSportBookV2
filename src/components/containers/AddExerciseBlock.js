import { connect } from 'react-redux'
import React, { Component } from 'react'
import AddExerciseBlock from '../presentationals/AddExerciseBlock'
import { getAllExercises } from '../../reducers/index'
import * as actionExercises from '../../actions/exercises'

class AddExerciseBlockL extends Component {

  componentDidMount () {
    this.fetchData()
  }

  fetchData () {
    const { fetchExercises } = this.props
    fetchExercises()
  }

  render () {
    return <AddExerciseBlock {...this.props}/>
  }
}

const mapStateToProps = (state) => {
  return {
    byId: state.exercises.byId,
    exercises: getAllExercises(state)
  }
}

AddExerciseBlockL = connect(
  mapStateToProps,
  actionExercises
)(AddExerciseBlockL)

export default AddExerciseBlockL
