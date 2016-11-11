import React, { Component } from 'react'
import { connect } from 'react-redux'
import Header from '../presentationals/Header'

const mapStateToProps = (state) => {
  return {
    first_name: state.user.first_name,
    avatar: state.user.avatar
  }
}

class Layout extends Component {
  render () {
    const props = this.props
    return (
      <div>
        <Header first_name={props.first_name} avatar={props.avatar}/>
        <div className='container'>
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  null
)(Layout)
