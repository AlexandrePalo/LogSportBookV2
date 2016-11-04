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
          console.log(props.id)
          console.log(props.exerciseBlockId)
          props.dispatch({
            type: 'ADD_SERIE',
            id: props.id,
            exerciseBlockId: props.exerciseBlockId,
            repetitions: this.state.rep,
            load: this.state.load
          })
        }}>Nouvel exercice</button>
      </div>
    )
  }
}

export default AddSerie
