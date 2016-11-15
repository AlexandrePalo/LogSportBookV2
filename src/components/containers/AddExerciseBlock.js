import { connect } from 'react-redux'
import React, { Component } from 'react'
import AddExerciseBlock from '../presentationals/AddExerciseBlock'
import { getAllExercises } from '../../reducers/index'
import * as actions from '../../actions/index'

class AddExerciseBlockL extends Component {
  componentDidMount () {
    this.fetchData()
  }

  fetchData () {
    const { fetchExercises } = this.props
    fetchExercises()
  }

  render () {
    let { addExerciseBlock, ...rest } = this.props
    return <AddExerciseBlock addExerciseBlock={addExerciseBlock} {...rest}/>
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
  actions
)(AddExerciseBlockL)

export default AddExerciseBlockL
