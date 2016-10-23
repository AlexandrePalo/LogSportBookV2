import React, { Component } from 'react'
import selectpicker from 'bootstrap-select'
import $ from 'jquery'

export default class ExerciseBlockForm extends Component {
  // Connect: exerciseBlock

  constructor (props) {
    super(props)
    this.renderSelectPicker = this.renderSelectPicker.bind(this)
    this.createExerciseBlock = this.createExerciseBlock.bind(this)
    this.state = {
      exercise: 0
    }
  }

  createExerciseBlock () {
    // Create exerciseBlock using this.props.training
  }

  componentDidMount () {
    this.renderSelectPicker()
  }
  componentDidUpdate () {
    this.renderSelectPicker()
  }
  renderSelectPicker () {
    $(this.refs.selectExercise).selectpicker()
  }

  render () {
    return (
      <form className={this.props.styleRoot}
      onSubmit={this.createSerie}>
        <div className="panel panel-default">
          <div className="panel-body">
            <div className="form-group">
              <select className="selectpicker" ref="selectExercise">
                <option>Mustard</option>
                <option>Ketchup</option>
                <option>Barbecue</option>
              </select>
            </div>
            <button type="submit" className="btn btn-success btn-block">Ajouter</button>
            </div>
          </div>
      </form>
    )
  }
}
