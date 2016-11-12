import React, { Component } from 'react'
import { Link } from 'react-router'

export default class Training extends Component {
  render () {
    let props = this.props
    return (
      <tr>
        <td>
          <Link to={'/trainings/' + props.id}>
            <button type="button" className="btn btn-default btn-xs">
              Modifier
            </button>
          </Link>
        </td>
        <td>{props.description}</td>
        <td>{props.date_begin.format('dddd DD/MM/YYYY')}</td>
        <td>{props.number_exerciseBlocks}</td>
        <td>{props.duration.hours()}h{(props.duration.minutes() === 0) ? '' : props.duration.minutes()}</td>
        <td>
        <i className="fa fa-trash" aria-hidden="true" onClick={() =>
          props.removeTraining(props.id)
        }></i>
        </td>
      </tr>
    )
  }
}
