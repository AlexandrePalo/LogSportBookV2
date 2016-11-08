import React, { Component } from 'react'
import datetimepicker from 'eonasdan-bootstrap-datetimepicker'
import moment from 'moment'
import { v4 } from 'node-uuid'

class AddTraining extends Component {
  constructor(props) {
    super(props)
    this.state = { description: '', place: '', date_begin: '', date_end: '' }
  }
  componentDidMount () {
    $(this.refs.datetimepicker_begin).datetimepicker({
      format: 'DD/MM/YY HH:mm',
      defaultDate: moment()
    });
    $(this.refs.datetimepicker_end).datetimepicker({
      format: 'DD/MM/YY HH:mm',
      defaultDate: moment().add(2, 'h')
    });
  }
  render () {
    const props = this.props
    return (
      <form>
        <div className="form-group">
          <label htmlFor='description'>Description</label>
          <input
            className='form-control'
            id='description'
            value={this.state.description}
            type='text'
            onChange={(e) => this.setState({ description: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor='place'>Lieu</label>
          <input
            className='form-control'
            id='place'
            value={this.state.place}
            type='text'
            onChange={(e) => this.setState({ place: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor='date_begin'>Date début</label>
          <div className='input-group date' ref='datetimepicker_begin'>
            <input type='text' className="form-control"
            onBlur={(e) => this.setState({ date_begin: e.target.value })}
            />
            <span className="input-group-addon">
              <span className="glyphicon glyphicon-calendar"></span>
            </span>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor='date_end'>Date fin</label>
          <div className='input-group date' ref='datetimepicker_end'>
            <input type='text' className="form-control"
            onBlur={(e) => this.setState({ date_end: e.target.value })}
            />
            <span className="input-group-addon">
              <span className="glyphicon glyphicon-calendar"></span>
            </span>
          </div>
        </div>
        <button className='btn btn-block btn-primary' type='button' onClick={() =>
          props.dispatch({
            type: 'ADD_TRAINING',
            id: v4(),
            description: this.state.description,
            place: this.state.place,
            date_begin: moment(this.state.date_begin, 'DD/MM/YY HH:mm'),
            date_end: moment(this.state.date_end, 'DD/MM/YY HH:mm'),
          })}>Nouvel entrainement</button>
      </form>
    )
  }
}

export default AddTraining
