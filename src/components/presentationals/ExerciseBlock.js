import React, { Component } from 'react'

export default class ExerciseBlock extends Component {
  // Connect: exerciseBlock, delete

  constructor (props) {
    super(props)
    this.state = {
    }
  }

  render () {
    return (
      <tr>
        <td>V</td>
        <td>Exercice: {this.props.exerciseBlock.exercise.name}</td>
        <td>Séries: {this.props.exerciseBlock.series.length}</td>
        <td onPress={() => { this.props.delete(this.props.exerciseBlock.id) }}>X</td>
      </tr>
    )
  }
}
