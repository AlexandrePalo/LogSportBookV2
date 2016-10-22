import React, { Component } from 'react'
import Serie from './Serie'

export default class ExerciceBlock extends Component {
  // Connect: exerciseBlock

  constructor (props) {
    super(props)
    this.state = {
      series: this.props.exerciseBlock.series
    }
  }

  render () {
    console.log(this.props.exerciseBlock.series)
    const seriesComponents = this.state.series.map((serie) => {
      return (
        <Serie key={serie.id} serie={serie} />
      )
    })
    return (
      <div className={this.props.styleRoot}>
        <h2>{this.props.exerciseBlock.exercise.name}</h2>
        <table className='table table-striped table-hover'>
          <tbody>
            {seriesComponents}
          </tbody>
        </table>
      </div>
    )
  }
}
