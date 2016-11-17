import React, { Component } from 'react'
import { connect } from 'react-redux'
import Header from '../presentationals/Header'
import Spinner from 'react-spinner-children'

const mapStateToProps = (state) => {
  return {
    user_id: localStorage.getItem('user_id'),
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
        <Header user_id={props.user_id} avatar={props.avatar} auth={props.route.auth}/>
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
