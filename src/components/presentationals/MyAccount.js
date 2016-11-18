import React, { Component } from 'react'
import Training from '../containers/Training'
import moment from 'moment'
import Chart from 'chart.js'
import { v4 } from 'node-uuid'
import AddTraining from '../containers/AddTraining'
import LineChart from '../containers/LineChart'

class MyAccount extends Component {

  render () {

    const style = {
      jumbotron: {
        background: 'white url(/src/img/kickboxer.jpeg) no-repeat center center',
      },
      text: {
        color: 'white'
      }
    }

    let props = this.props
    return (
      <div>
        <div className='row'>
          <div className="jumbotron col-md-12" style={style.jumbotron}>
            <h1 style={style.text}>A la une</h1>
            <p style={style.text}>Le plus difficile est de rester motivé tout au long de l'année, ne perdez pas espoir ! Il est temps de s'entraîner cette semaine.</p>
            <p><button className="btn btn-success btn-lg" data-toggle="modal" data-target="#newTrainingModal">Nouvel entraînement</button></p>
          </div>
        </div>

        <div className='row'>
          <div className='col-md-8'>
            <div className="panel panel-primary">
              <div className="panel-heading">
                <h3 className="panel-title">Derniers entraînements (voir plus)</h3>
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
          <div className='col-md-4'>
            <div className="panel panel-primary">
              <div className="panel-heading">
                <h3 className="panel-title">Données corporelles</h3>
              </div>
                  <table className='table'>
                    <tbody>
                      <tr>
                        <td>Taille</td>
                        <td>185 cm</td>
                      </tr>
                      <tr>
                        <td>Poids</td>
                        <td>74 kg</td>
                      </tr>
                      <tr>
                        <td>IMC</td>
                        <td>21.6</td>
                      </tr>
                      <tr>
                        <td>% masse grasse</td>
                        <td>25 %</td>
                      </tr>
                    </tbody>
                  </table>
            </div>
          </div>
        </div>

        <div className='row'>
          <div className='col-md-12'>
            <div className="panel panel-primary">
              <div className="panel-heading">
                <h3 className="panel-title">Evolution</h3>
              </div>
              <div className="panel-body">
                <LineChart />
              </div>
            </div>
          </div>
        </div>

        <div className="modal fade" id="newTrainingModal" tabIndex="-1" role="dialog" aria-labelledby="newTrainingModal">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h4 className="modal-title" id="myModalLabel">Nouvel entrainement</h4>
              </div>
              <div className="modal-body">
                <AddTraining />
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-default" data-dismiss="modal">Annuler</button>
              </div>
            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default MyAccount
