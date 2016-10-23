import React, { Component } from 'react'
import Serie from './Serie'
import SerieForm from './SerieForm'

export default class ExerciseBlockBoard extends Component {
  // Connect: exerciseBlock

  constructor (props) {
    super(props)
    this.state = {
      series: this.props.exerciseBlock.series
    }
  }

  finish () {
    // Finish the exerciseBlock
  }

  render () {
    const seriesComponents = this.state.series.map((serie) => {
      return (
        <Serie key={serie.id} serie={serie} />
      )
    })
    return (
      <div className={this.props.styleRoot}>
      <div className='row'>
        <h2>{this.props.exerciseBlock.exercise.name}</h2>
        <table className='table table-striped table-hover'>
          <tbody>
            {seriesComponents}
          </tbody>
        </table>
      </div>
      <div className='row'>
        <SerieForm
        exerciseBlock={this.props.exerciseBlock}
        styleRoot='col-md-4'/>
        <div className='col-md-4'>
          <button className='btn btn-danger btn-block'
          onPress={this.finish}>Terminer l'exercice</button>
        </div>
      </div>
      </div>

    )
  }
}
