import Auth0Lock from 'auth0-lock'
import { isTokenExpired } from './jwtHelper'
import { createSession, removeSession, fetchUser, receiveUser, requestUser } from '../actions/index'
import store from '../index'
import fetch from 'isomorphic-fetch'

export default class AuthService {
  constructor(clientId, domain) {
    // Configure Auth0
    this.lock = new Auth0Lock(clientId, domain, {})
    // Add callback for lock `authenticated` event
    this.lock.on('authenticated', this._doAuthentication.bind(this))
    // binds login functions to keep this context
    this.login = this.login.bind(this)
  }

  _doAuthentication(authResult){
    // Saves the user token
    this.setToken(authResult.idToken)
    // Set the current user (sync needed !)
    fetchUser(authResult.idToken).then((json) => {
      localStorage.setItem('user_id', json.response.user_id)
    })
  }

  login() {
    // Call the show method to display the widget.
    this.lock.show()
  }

  loggedIn(){
    // Checks if there is a saved token and it's still valid
    const token = this.getToken()
    return !!token && !isTokenExpired(token)
  }

  setToken(idToken){
    localStorage.setItem('id_token', idToken)
  }

  getToken(){
    // Retrieves the user token from localStorage
    return localStorage.getItem('id_token')
  }

  logout(){
    localStorage.removeItem('id_token')
    localStorage.removeItem('user_id')
  }
}
