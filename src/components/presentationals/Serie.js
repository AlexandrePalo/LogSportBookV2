import React, { Component } from 'react'

export default class Serie extends Component {
  // Connect: serie, delete

  constructor (props) {
    super(props)
    this.state = {
    }
  }

  render () {
    return (
      <tr>
        <td>V</td>
        <td>Répétitions: {this.props.serie.repetition}</td>
        <td>Charge: {this.props.serie.load}</td>
        <td onPress={() => { this.props.delete(this.props.serie.id) }}>X</td>
      </tr>
    )
  }
}
