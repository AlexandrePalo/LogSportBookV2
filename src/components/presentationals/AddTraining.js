import React, { Component } from 'react'
import datetimepicker from 'eonasdan-bootstrap-datetimepicker'
import moment from 'moment'
import { v4 } from 'node-uuid'

class AddTraining extends Component {
  constructor(props) {
    super(props)
    this.state = { description: '', place: '', date_begin: moment(), date_end: moment().add(2, 'h') }
  }
  componentDidMount () {
    const $date1 = $(this.refs.datetimepicker_begin)
    $date1.datetimepicker({
      format: 'DD/MM/YY HH:mm',
      defaultDate: moment()
    })
    const $date2 = $(this.refs.datetimepicker_end)
    $date2.datetimepicker({
      format: 'DD/MM/YY HH:mm',
      defaultDate: moment().add(2, 'h')
    })
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
            onBlur={(e) => this.setState({ date_begin: moment(e.target.value, 'DD/MM/YY HH:mm') })}
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
            onBlur={(e) => this.setState({ date_end: moment(e.target.value, 'DD/MM/YY HH:mm') })}
            />
            <span className="input-group-addon">
              <span className="glyphicon glyphicon-calendar"></span>
            </span>
          </div>
        </div>
        <button className='btn btn-block btn-success' type='button' data-dismiss="modal"
          onClick={() => {
            console.log(this.state)
            props.addTraining({
              description: this.state.description,
              place: this.state.place,
              date_end: this.state.date_end,
              date_begin: this.state.date_begin
            }, props.userId)
          }
        }>Nouvel entrainement</button>
      </form>
    )
  }
}

export default AddTraining

AddTraining.contextTypes = {
  router: React.PropTypes.object.isRequired
}
