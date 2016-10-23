import React, { Component } from 'react'
import ExerciseBlock from './ExerciseBlock'
import ExerciseBlockForm from './ExerciseBlockForm'
import moment from 'moment'

export default class TrainingBoard extends Component {
  // Connect: training

  constructor (props) {
    super(props)
    this.state = {
      exerciseBlocks: this.props.training.exerciseBlocks
    }
  }

  finish () {
    // Finish the training
  }

  render () {
    const exerciseBlocksComponents = this.props.training.exerciseBlocks.map((exerciseBlock) => {
      return (
        <ExerciseBlock key={exerciseBlock.id} exerciseBlock={exerciseBlock} />
      )
    })
    return (
      <div className={this.props.styleRoot}>
      <div className='row'>
        <h2>{this.props.training.place}, {this.props.training.date_end.diff(this.props.training.date_begin, 'minutes')} min le {this.props.training.date_begin.format("DD/MM/YYYY")}</h2>
        <table className='table table-striped table-hover'>
          <tbody>
            {exerciseBlocksComponents}
          </tbody>
        </table>
      </div>
      <div className='row'>
        <ExerciseBlockForm
        exerciseBlock={this.props.exerciseBlock}
        styleRoot='col-md-4'/>
        <div className='col-md-4'>
          <button className='btn btn-danger btn-block'
          onPress={this.finish}>Terminer l'entrainement</button>
        </div>
      </div>
      </div>

    )
  }
}
