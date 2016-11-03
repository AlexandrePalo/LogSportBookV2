import React, { Component } from 'react'
import Serie from './Serie'
import AddSerie from '../containers/AddSerie'

export default class ExerciseBlockBoard extends Component {
  render () {
    const props = this.props
    return (
      <div>
        <div className='row'>
          <h1>{props.name}</h1>
          <table className='table table-striped table-hover'>
            <tbody>
              {props.series.map((s) => {
                return(
                <Serie
                  repetitions={s.repetitions}
                  load={s.load}
                  id={s.id}
                  key={s.id}
                />
              )}
              )}
            </tbody>
          </table>
        </div>
        <div className='row'>
          <div className='col-md-4'>
            <AddSerie />
            <button className='btn btn-danger btn-block'>Terminer l'exercice</button>
          </div>
        </div>
      </div>

    )
  }
}
