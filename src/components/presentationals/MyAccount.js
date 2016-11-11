import React, { Component } from 'react'
import Training from './Training'
import moment from 'moment'

class MyAccount extends Component {
  render () {
    return (
      <div>
        <div className='row'>
          <div className="jumbotron col-md-12">
            <h1>A la une</h1>
            <p>Le plus difficile est de rester motivé tout au long de l'année, ne perdez pas espoir ! Il est temps de s'entraîner cette semaine.</p>
            <p><a className="btn btn-success btn-lg">Nouvel entraînement</a></p>
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
                <tbody>
                  <Training
                    description='Pectoraux - biceps'
                    date_begin={moment('2016-11-07 20:00')}
                    number_exerciseBlocks='4'
                    duration={moment.duration(moment('2016-11-07 22:00').diff(moment('2016-11-07 20:00')))}
                  />
                  <Training
                    description='Dos - triceps'
                    date_begin={moment('2016-11-09 21:00')}
                    number_exerciseBlocks='4'
                    duration={moment.duration(moment('2016-11-09 21:00').diff(moment('2016-11-09 20:00')))}
                  />
                  <Training
                    description='Epaules - james'
                    date_begin={moment('2016-11-11 18:00')}
                    number_exerciseBlocks='4'
                    duration={moment.duration(moment('2016-11-11 20:00').diff(moment('2016-11-11 18:30')))}
                  />
                </tbody>
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
                Graphique d'évolution
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MyAccount
