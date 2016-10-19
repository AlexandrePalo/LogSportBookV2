import React, { Component } from 'react'

export default class ExerciceBlock extends Component {
  constructor (props) {
    super(props)
    this.state = {
      series = this.props.series
    }
  }

  render () {
    seriesComponents = this.state.series.map((serie) => {
      return (
        <Serie key={serie.id} serie={serie} />
      )
    })
    return (
      <div>
        <h2>{this.props.exerciceBlock.exercice.name}</h2>
        <table className='table table-striped table-hover'>
          <tbody>
            {seriesComponents}
          </tbody>
        </table>
      </div>
    )
  }
}
