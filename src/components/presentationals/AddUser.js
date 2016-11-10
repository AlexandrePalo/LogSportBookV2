import React, { Component } from 'react'
import datetimepicker from 'eonasdan-bootstrap-datetimepicker'
import moment from 'moment'
import { v4 } from 'node-uuid'

class AddUser extends Component {
  constructor(props) {
    super(props)
    this.state = {
      first_name: '',
      last_name: '',
      date_birth: '',
      email: '',
      password: ''
    }
  }

  componentDidMount () {
    $(this.refs.datetimepicker).datetimepicker({
      format: 'DD/MM/YY',
      defaultDate: moment()
    });
  }

  render () {
    const props = this.props
    return (
      <div className='panel panel-primary' style={{background: 'none'}}>
        <div className='panel-heading'>
          <h3 className='panel-title' style={{fontSize: '15pt'}}>Ou créez un compte !</h3>
        </div>
        <div className='panel-body'>
          <form>
            <div className="form-group">
              <label htmlFor='first_name'>Prénom</label>
              <input
                className='form-control'
                id='first_name'
                value={this.state.first_name}
                type='text'
                onChange={(e) => this.setState({ first_name: e.target.value })}
              />
            </div>
            <div className="form-group">
              <label htmlFor='last_name'>Nom</label>
              <input
                className='form-control'
                id='last_name'
                value={this.state.last_name}
                type='text'
                onChange={(e) => this.setState({ last_name: e.target.value })}
              />
            </div>
            <div className="form-group">
              <label htmlFor='date_birth'>Date de naissance</label>
              <div className='input-group date' ref='datetimepicker'>
                <input type='text' className="form-control"
                onBlur={(e) => this.setState({ date_birth: e.target.value })}
                />
                <span className="input-group-addon">
                  <span className="glyphicon glyphicon-calendar"></span>
                </span>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor='password'>Mot de passe</label>
              <input
                className='form-control'
                id='password'
                value={this.state.password}
                type='password'
                onChange={(e) => this.setState({ password: e.target.value })}
              />
            </div>
            <button className='btn btn-block btn-primary' type='button' onClick={() => {
                console.log('create user')
              }}>Création</button>
          </form>
        </div>
      </div>
    )
  }
}

export default AddUser
