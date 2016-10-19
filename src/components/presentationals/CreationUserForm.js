import React, { Component } from 'react'
import $ from 'jquery'
import datetimepicker from 'eonasdan-bootstrap-datetimepicker'
import { ddmmyyyyStrDate } from '../../utils/date'
import 'whatwg-fetch'
import { api } from '../../utils/api'

export default class CreationUserForm extends Component {
  constructor (props) {
    super(props)
    this.renderDateTimePicker = this.renderDateTimePicker.bind(this)
    this.createUser = this.createUser.bind(this)
    this.state = {
      email: '',
      password: '',
      passwordRepeated: '',
      last_name: '',
      first_name: '',
      date_birth: null
    }
  }

  componentDidMount () {
    this.renderDateTimePicker()
  }
  componentDidUpdate () {
    this.renderDateTimePicker()
  }
  renderDateTimePicker () {
    $(this.refs.dateBirthPicker).datetimepicker({
      format: 'DD/MM/YYYY'
    })
  }

  createUser () {
    // Use Redux action !
  }

  render () {
    return (
      <form className={this.props.styleRoot}
      onSubmit={this.createUser}>
        <div className="panel panel-default">
          <div className="panel-body">
            <div className="form-group">
              <label htmlFor="inputEmail">E-mail</label>
              <input type="text" className="form-control" id="inputEmail" placeholder="E-mail"
              onChange={(e) => { this.setState({ email: e.target.value }) }}/>
            </div>
            <div className="form-group">
              <label htmlFor="inputPassword">Mot de passe</label>
              <input type="password" className="form-control" id="inputPassword" placeholder="Mot de passe"
              onChange={(e) => { this.setState({ password: e.target.value }) }}/>
            </div>
            <div className="form-group">
              <label htmlFor="inputPasswordRepeated">Répétition du mot de passe</label>
              <input type="password" className="form-control" id="inputPasswordRepeated" placeholder="Mot de passe"
              onChange={() => {}}/>
            </div>
            <div className="form-group">
              <label htmlFor="inputFirstName">Prénom</label>
              <input type="text" className="form-control" id="inputFirstName" placeholder="Prénom"
              onChange={(e) => { this.setState({ first_name: e.target.value }) }}/>
            </div>
            <div className="form-group">
              <label htmlFor="inputLastName">Nom</label>
              <input type="text" className="form-control" id="inputLastName" placeholder="Nom"
              onChange={(e) => { this.setState({ last_name: e.target.value }) }}/>
            </div>
            <div className="form-group">
                <label htmlFor="date_birth_picker">Date de naissance</label>
                <div className='input-group date' id='date_birth_picker' ref='dateBirthPicker'>
                    <input type='text' className="form-control"
                    onBlur={(e) => { this.setState({ date_birth: ddmmyyyyStrDate(e.target.value) }) } }/>
                    <span className="input-group-addon">
                        <span className="glyphicon glyphicon-calendar"></span>
                    </span>
                </div>
            </div>
            <button type="submit" className="btn btn-success btn-block">Valider</button>
            </div>
          </div>
      </form>
    )
  }
}
