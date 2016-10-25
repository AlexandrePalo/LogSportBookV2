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
    return (
      <div>
        <div>
          <Header
          first_name="Alexandre"
          avatar="LogoAlex"
          onClickSettings={this.onClickSettings}/>
        </div>
      </div>
    )
  }
}
