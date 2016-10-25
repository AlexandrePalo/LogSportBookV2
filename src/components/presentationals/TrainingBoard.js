import React, { Component } from 'react'
import ExerciseBlock from './ExerciseBlock'
import ExerciseBlockForm from './ExerciseBlockForm'
import moment from 'moment'

var nextTrainingId = 1

export default class TrainingBoard extends Component {
  // Connect: training

  constructor (props) {
    super(props)
    this.state = {
      //exerciseBlocks: this.props.training.exerciseBlocks
    }
  }

  finish () {
    // Finish the training
  }

  render () {
    //           <h2>{this.props.training.place}, {this.props.training.date_end.diff(this.props.training.date_begin, 'minutes')} min le {this.props.training.date_begin.format("DD/MM/YYYY")}</h2>
    /*
    <div className='row'>
      <ExerciseBlockForm
      exerciseBlock={this.props.exerciseBlock}
      styleRoot='col-md-4'/>
      <div className='col-md-4'>
        <button className='btn btn-danger btn-block'
        onPress={this.finish}>Terminer l'entrainement</button>
      </div>
    </div>
    */
    return (
      <div className={this.props.styleRoot}>
        <div className='row'>
          <table className='table table-striped table-hover'>
            <tbody>
              {this.context.store.getState().trainings.map(training =>
                <tr>
                  <td>{training.id}</td>
                  <td>{training.description}</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        <div className='row'>
          <div className='col-md-4'>
            <button className='btn btn-danger btn-block'
              onPress={() => {
              console.log('click')
              this.context.store.dispatch({
              type: 'ADD_TRAINING',
              id: nextTrainingId++,
              description: 'Description',
              place: 'BasicFit',
              active: true,
              date_begin: moment('24/20/2016 18:00'),
              date_end: moment('24/20/2016 20:00')
            }) }}>Ajouter</button>
          </div>
        </div>
      </div>

    )
  }
}

TrainingBoard.contextTypes = {
  store: React.PropTypes.object
}
