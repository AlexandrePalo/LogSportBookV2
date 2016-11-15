import React, { Component } from 'react'
import { connect } from 'react-redux'
import Header from '../presentationals/Header'

const mapStateToProps = (state) => {
  return {
    first_name: state.user.id,
    avatar: state.user.avatar
  }
}

class Layout extends Component {
  render () {
    const props = this.props
    let children = null
    if (this.props.children) {
      children = React.cloneElement(this.props.children, {
        auth: this.props.route.auth
      })
    }
    return (
      <div>
        <Header first_name={props.first_name} avatar={props.avatar} auth={props.route.auth}/>
        <div className='container'>
          {children}
        </div>
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  null
)(Layout)
