import React, { Component } from 'react'

class AddSerie extends Component {
  constructor(props) {
    super(props)
    this.state = { rep: '', load: '' }
  }

  render () {
    const props = this.props
    return (
      <div>
        <input
          value={this.state.rep}
          type='number'
          onChange={(e) => this.setState({ rep: e.target.value })}
        />
        <input
          value={this.state.load}
          type='number'
          onChange={(e) => this.setState({ load: e.target.value })}
        />
        <button className='btn btn-primary' onClick={() => {
          props.dispatch({
            type: 'ADD_SERIE',
            id: 1,
            idExerciseBlock: 1,
            repetitions: this.state.rep,
            load: this.state.load
          })
        }}>Nouvel exercice</button>
      </div>
    )
  }
}

export default AddSerie
