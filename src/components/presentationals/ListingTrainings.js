import React, { Component } from 'react'
import Training from '../containers/Training'

class ListingTrainings extends Component {

  constructor (props, context) {
    super(props)
    this.fetchData = this.fetchData.bind(this)
    this.state = {
      allDates: true
    }
  }

  componentDidUpdate () {
    if (!this.state.allDates) {
      const $date1 = $(this.refs.datetimepicker_begin)
      $date1.datetimepicker({
        format: 'DD/MM/YY',
        locale: 'fr',
        defaultDate: moment()
      })
    }
    if (!this.state.allDates) {
      const $date2 = $(this.refs.datetimepicker_end)
      $date2.datetimepicker({
        format: 'DD/MM/YY',
        locale: 'fr',
        defaultDate: moment()
      })
    }
  }

  fetchData () {
    this.props.fetchData(
      this.props.userId,
      null,
      null,
      this.search.value,
      !this.state.allDates && moment(this.date_begin.value, 'DD/MM/YY'),
      !this.state.allDates && moment(this.date_end.value, 'DD/MM/YY')
    )
  }
  render () {
    const style = {
      label: {
        marginLeft: '20px',
        marginRight: '15px'
      }
    }
    const props = this.props
    return (
      <div>
        <div className='row'>
          <div className='col-md-12'>
            <div className="panel panel-primary">
              <div className="panel-heading">
                <h3 className="panel-title">Recherche</h3>
              </div>
              <div className="panel-body">
                <form className="form-inline">
                  <div className="form-group">
                    <label className="sr-only" htmlFor="inputSearch">Recherche</label>
                    <input type="text" className="form-control" id="inputSearch" placeholder="Recherche"
                      ref={ node => { this.search = node }} onChange={ (e) => {
                        this.fetchData()
                      }}/>
                  </div>
                  <div className="checkbox">
                    <label style={style.label}>
                      <input type="checkbox" checked={this.state.allDates}
                        onChange={(e) => {
                          this.setState({ allDates: e.target.checked})
                        }}/> Toutes les dates
                    </label>
                  </div>
                  {!this.state.allDates && (
                    <div className="form-group">
                      <label htmlFor='date_begin' style={style.label}>De :</label>
                      <div className='input-group date' ref='datetimepicker_begin' >
                        <input type='text' className="form-control"
                          ref={ node => { this.date_begin = node }} onBlur={(e) => {
                            this.fetchData()
                          }}/>
                        <span className="input-group-addon">
                          <span className="glyphicon glyphicon-calendar"></span>
                        </span>
                      </div>
                    </div>
                  )}
                  {!this.state.allDates && (
                    <div className="form-group">
                      <label htmlFor='date_end' style={style.label}>à :</label>
                      <div className='input-group date' ref='datetimepicker_end'>
                        <input type='text' className="form-control"
                          ref={ node => { this.date_end = node }} onBlur={(e) => {
                            this.fetchData()
                          }}/>
                        <span className="input-group-addon">
                          <span className="glyphicon glyphicon-calendar"></span>
                        </span>
                      </div>
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-12'>
            <div className="panel panel-primary">
              <div className="panel-heading">
                <h3 className="panel-title">Entraînements</h3>
              </div>
              <table className='table table-striped table-hover'>
                <thead>
                  <tr>
                    <th></th>
                    <th>Description</th>
                    <th>Date</th>
                    <th>Exercices</th>
                    <th>Durée</th>
                    <th></th>
                  </tr>
                </thead>
                {
                  props.isFetchingTrainings ?
                  (<tbody>Loading ...</tbody>) :
                  (
                    <tbody>
                      {props.trainings.map((t) => {
                        let date_begin = moment(t.date_begin)
                        let date_end = moment(t.date_end)
                        return (
                          <Training
                            description={t.description}
                            date_begin={date_begin}
                            number_exerciseBlocks={t.exerciseBlocks.allIds.length}
                            duration={moment.duration(date_end.diff(date_begin))}
                            key={t.id}
                            id={t.id}
                          />
                        )
                      })}
                    </tbody>
                  )
                }
              </table>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ListingTrainings
