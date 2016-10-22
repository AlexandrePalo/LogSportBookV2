import React, { Component } from 'react'

export default class SerieForm extends Component {
  // Connect: exerciseBlock

  constructor (props) {
    super(props)
    this.createSerie = this.createSerie.bind(this)
    this.state = {
      repetition: 0,
      load: 0
    }
  }

  createSerie () {
    // Create serie using this.props.exerciseBlock
  }

  render () {
    return (
      <form className={this.props.styleRoot}
      onSubmit={this.createSerie}>
        <div className="panel panel-default">
          <div className="panel-body">
            <div className="form-group">
              <label htmlFor="inputRepetition">Répétitions</label>
              <input type="number" className="form-control" id="inputRepetition" placeholder="Répétitions"
              onChange={(e) => { this.setState({ repetition: e.target.value }) }}/>
            </div>
            <div className="form-group">
              <label htmlFor="inputLoad">Charge</label>
              <input type="number" className="form-control" id="inputLoad" placeholder="Charge"
              onChange={(e) => { this.setState({ load: e.target.value }) }}/>
            </div>
            <button type="submit" className="btn btn-success btn-block">Ajouter</button>
            </div>
          </div>
      </form>
    )
  }
}
