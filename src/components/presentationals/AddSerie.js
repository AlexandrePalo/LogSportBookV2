import React, { Component } from 'react'

class AddSerie extends Component {
  constructor(props) {
    super(props)
    this.state = { rep: '', load: '' }
  }

  render () {
    const props = this.props
    return (
      <form>
        <div className="form-group">
          <label htmlFor='repetitions'>Répétitions</label>
          <input
            className='form-control'
            id='repetitions'
            value={this.state.rep}
            type='number'
            onChange={(e) => this.setState({ rep: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor='load'>Charge</label>
          <div className='input-group'>
            <input
              className='form-control'
              id='load'
              value={this.state.load}
              type='number'
              onChange={(e) => this.setState({ load: e.target.value })}
            />
            <div className='input-group-addon'>kg</div>
          </div>
        </div>
        <button className='btn btn-primary' type='button' onClick={() => {
          props.dispatch({
            type: 'ADD_SERIE',
            id: props.id,
            exerciseBlockId: props.exerciseBlockId,
            repetitions: this.state.rep,
            load: this.state.load
          })
        }}>Nouvel exercice</button>
      </form>

    )
  }
}

export default AddSerie
