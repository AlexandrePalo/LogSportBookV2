import React, { Component } from 'react'

export default class Title extends Component {
  render () {
    return (
      <div className={this.props.styleRoot}>
        <h1 style={{textAlign: 'center'}}>Log Sport Book</h1>
      </div>
    )
  }
}
