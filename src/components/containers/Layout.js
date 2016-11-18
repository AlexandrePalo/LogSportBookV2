import React, { Component } from 'react'
import { connect } from 'react-redux'
import Header from '../presentationals/Header'
import * as actions from '../../actions/index'

const mapStateToProps = (state) => {
  return {
    profile: state.user.profile
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

    if (props.profile) {
      return (
        <div>
          <Header nickname={props.profile.nickname} picture={props.profile.picture} auth={props.route.auth}/>
          <div className='container'>
            {children}
          </div>
        </div>
      )
    } else {
      // Fetch profile
      const { loginUserWithSession } = props
      loginUserWithSession(localStorage.getItem('access_token'))
      return (
        <div>
          <Header auth={props.route.auth}/>
          <div className='container'>
            <p>Loading profile ...</p>
          </div>
        </div>
      )
    }


  }
}

export default connect(
  mapStateToProps,
  actions
)(Layout)
