import React, { Component } from 'react'

export default class ExerciseBlock extends Component {
  render () {
    let props = this.props
    return (
      <tr>
        <td>{
          (props.id === props.visibilityFilterExerciseBlock)
          ? (<i className='fa fa-check-circle-o' aria-hidden='true'></i>)
          : (<i className='fa fa-circle-o' aria-hidden='true' onDoubleClick={
            () => props.dispatch({ type: 'SET_VISIBILITY_FILTER_EXERCISEBLOCK', filter: props.id })
          }></i>)
        }</td>
        <td>{props.exercise.name}</td>
        <td>{props.numberSeries}</td>
        <td>{props.duration}</td>
        <td
          onClick={() => props.dispatch({ type: 'REMOVE_EXERCISEBLOCK', id: props.trainingId, exerciseBlockId: props.id })}
          >
          <i className="fa fa-trash" aria-hidden="true"></i>
        </td>
      </tr>
    )
  }
}
