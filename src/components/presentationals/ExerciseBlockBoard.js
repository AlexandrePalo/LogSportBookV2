import React, { Component } from 'react'
import Serie from '../containers/Serie'
import AddSerie from '../containers/AddSerie'

export default class ExerciseBlockBoard extends Component {
  render () {
    const props = this.props
    return (
      <div>
        <div className='row'>
          <h1>{props.name}</h1>
          <table className='table table-striped table-hover'>
            <thead>
              <tr>
                <th></th>
                <th>Répétitions</th>
                <th>Charge</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {props.series.map((s) => {
                return(
                <Serie
                  repetitions={s.repetitions}
                  load={s.load}
                  id={s.id}
                  exerciseBlock={props.params.exerciseBlock}
                  training={props.params.training}
                  key={s.id}
                />
              )}
              )}
            </tbody>
          </table>
        </div>
        <div className='row'>
          <div className='col-md-offset-4 col-md-4'>
            <AddSerie id={props.params.exerciseBlock} training={props.params.training}/>
          </div>
        </div>
      </div>

    )
  }
}
