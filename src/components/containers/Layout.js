import React, { Component } from 'react'
import { connect } from 'react-redux'
import Header from '../presentationals/Header'
import * as actions from '../../actions/index'

const mapStateToProps = (state) => {
  return {
    profile: state.user.profile,
    dataChecked: state.user.dataChecked
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

    if (props.profile && props.dataChecked) {
      console.log(props.profile)
      return (
        <div>
          <Header nickname={props.profile.nickname} picture={props.profile.picture} auth={props.route.auth}/>
          <div className='container'>
            {children}
          </div>
        </div>
      )
    } else {
      // Fetch Profile first if no profile
      if (!props.profile) {
        const { loginUserWithSession } = props
        loginUserWithSession(localStorage.getItem('access_token'))
        return (
          <div>
            <Header auth={props.route.auth}/>
            <div className='container'>
              <p>Chargement du profil ...</p>
            </div>
          </div>
        )
      } else {
        if (!props.dataChecked) {
          const { fetchTrainingsFirst } = props
          fetchTrainingsFirst(props.profile.user_id)
          return (
            <div>
              <Header nickname={props.profile.nickname} picture={props.profile.picture} auth={props.route.auth}/>
              <div className='container'>
                <p>Chargement des données ...</p>
              </div>
            </div>
          )
        }
      }
    }
  }
}

export default connect(
  mapStateToProps,
  actions
)(Layout)
