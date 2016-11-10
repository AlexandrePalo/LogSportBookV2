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
    const style = {
      input: {
        fontWeight: '500',
        fontSize: '15pt',
        color: 'white'
      },
      inputText: {
        fontSize: '15pt',
        fontWeight: '500'
      }
    }
    const props = this.props
    return (
      <div className='panel panel-primary' style={{background: 'none'}}>
        <div className='panel-heading'>
          <h3 className='panel-title' style={{fontSize: '15pt'}}>Ou créez un compte !</h3>
        </div>
        <div className='panel-body'>
          <form>
            <div className="form-group" style={style.input}>
              <label htmlFor='first_name'>Prénom</label>
              <input
                className='form-control'
                id='first_name'
                value={this.state.first_name}
                type='text'
                style={style.inputText}
                onChange={(e) => this.setState({ first_name: e.target.value })}
              />
            </div>
            <div className="form-group" style={style.input}>
              <label htmlFor='last_name'>Nom</label>
              <input
                className='form-control'
                id='last_name'
                value={this.state.last_name}
                type='text'
                style={style.inputText}
                onChange={(e) => this.setState({ last_name: e.target.value })}
              />
            </div>
            <div className="form-group" style={style.input}>
              <label htmlFor='date_birth'>Date de naissance</label>
              <div className='input-group date' ref='datetimepicker'>
                <input type='text' className="form-control"
                  style={style.inputText}
                  onBlur={(e) => this.setState({ date_birth: e.target.value })}
                />
                <span className="input-group-addon">
                  <span className="glyphicon glyphicon-calendar"></span>
                </span>
              </div>
            </div>
            <div className="form-group" style={style.input}>
              <label htmlFor='password'>Mot de passe</label>
              <input
                className='form-control'
                id='password'
                value={this.state.password}
                type='password'
                style={style.inputText}
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
