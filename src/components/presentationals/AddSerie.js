import React, { Component } from 'react'

class AddSerie extends Component {

  constructor(props) {
    super(props)
    this.state = { rep: 0, load: 0 }
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
        <button className='btn btn-block btn-primary' type='button' onClick={() =>
          props.addSerie(props.training, props.id, Number(this.state.rep), Number(this.state.load))
        }>Nouvelle série</button>
        <button className='btn btn-danger btn-block' type='button' onClick={() =>
          this.context.router.push('/trainings/' + props.training)
        }>Terminer l'exercice</button>
      </form>
    )
  }
}

export default AddSerie

AddSerie.contextTypes = {
  router: React.PropTypes.object.isRequired
}
