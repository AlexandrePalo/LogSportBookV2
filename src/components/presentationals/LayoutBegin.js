import React, { Component } from 'react'

class LayoutBegin extends Component {
  render () {
    const style = {
      container: {
        background: 'white url(/src/img/workout.jpeg) no-repeat right bottom',
        height: '100vh'
      }
    }

    return (
        <div className='container-fluid' style={style.container}>
          {this.props.children}
        </div>
    )
  }
}

export default LayoutBegin
