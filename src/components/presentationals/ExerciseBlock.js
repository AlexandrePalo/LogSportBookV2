import React, { Component } from 'react'
import { Link } from 'react-router'
import DeleteWithConfirmation from './DeleteWithConfirmation'

export default class ExerciseBlock extends Component {
  render () {
    let props = this.props
    return (
      <tr>
        <td>{
          (props.isEdited)
          ? (<button type="button" className="btn btn-default btn-xs disabled">
            Modifier
          </button>)
          :
          (<Link to={'/trainings/' + props.training + '/exerciseblocks/' + props.id}>
            <button type="button" className="btn btn-default btn-xs">
              Modifier
            </button>
          </Link>)
        }</td>
        <td>{props.exercise.name}</td>
        <td>{props.numberSeries}</td>
        <td>{props.duration}</td>
        <td>
          <DeleteWithConfirmation
            remove={() => props.removeExerciseBlock(props.id, props.training)}
            id={props.id}
            label="l'exercice"
          />
        </td>
      </tr>
    )
  }
}

ExerciseBlock.contextTypes = {
    router: React.PropTypes.object.isRequired
}
