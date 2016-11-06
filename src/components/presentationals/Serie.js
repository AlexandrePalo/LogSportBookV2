import React, { Component } from 'react'

export default class Serie extends Component {
  render () {
    let props = this.props
    return (
      <tr>
        <td>V</td>
        <td>{props.repetitions}</td>
        <td>{props.load}</td>
        <td>
        <i className="fa fa-trash" aria-hidden="true" onClick={() =>
          props.dispatch({
            type: 'REMOVE_SERIE',
            id: props.trainingId,
            exerciseBlockId: props.exerciseBlockId,
            serieId: props.id
          })
        }></i>
        </td>
      </tr>
    )
  }
}
