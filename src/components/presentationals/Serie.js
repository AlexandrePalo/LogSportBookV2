import React, { Component } from 'react'
import DeleteWithConfirmation from './DeleteWithConfirmation'

export default class Serie extends Component {
  render () {
    let props = this.props
    return (
      <tr>
        <td>V</td>
        <td>{props.repetitions}</td>
        <td>{props.load}</td>
        <td>
          <DeleteWithConfirmation
            remove={() => props.removeSerie(props.id, props.training, props.exerciseBlock)}
            id={props.id}
            label="la série"
          />
        </td>
      </tr>
    )
  }
}
