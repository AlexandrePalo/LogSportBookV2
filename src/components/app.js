import React, { Component } from 'react';
import TrainingBoard from './presentationals/TrainingBoard'
import SerieForm from './presentationals/SerieForm'
import moment from 'moment'

import Header from './presentationals/Header'

export default class App extends Component {
  onClickSettings () {
    console.log("on click settings")
  }

  render () {
    let exerciseBlocks = [
      {
        id: 1,
        ns: 4,
        d: 20,
        name: "Développé couché"
      },
      {
        id: 2,
        ns: 5,
        d: 25,
        name: "Dips"
      }
    ]
    return (
      <div>
        <div>
          <Header
          first_name="Alexandre"
          avatar="LogoAlex"
          onClickSettings={this.onClickSettings}/>
          <div className="container">
            <TrainingBoard
              id="1"
              description="pectoraux"
              exerciseBlocks={exerciseBlocks}
            />
          </div>
        </div>
      </div>
    )
  }
}
