import Auth0Lock from 'auth0-lock'
import { isTokenExpired } from './jwtHelper'
import { createSession, removeSession, fetchUser, receiveUser, requestUser } from '../actions/index'
import store from '../index'
import fetch from 'isomorphic-fetch'

export default class AuthService {
  constructor(clientId, domain) {
    // Configure Auth0
    this.lock = new Auth0Lock(clientId, domain, {})
    this.lock.on('authenticated', this._doAuthentication.bind(this))
    this.login = this.login.bind(this)
  }

  // unused with custom login form
  _doAuthentication(authResult){
    // Saves the user token
    this.setToken(authResult.idToken)
  }

  login() {
    // Call the show method to display the widget.
    this.lock.show()
  }

  loggedIn(){
    // Checks if there is a saved token and it's still valid
    // Check if there is a savec profile
    const token = this.getToken()
    const profile = this.getProfile()
    return (!!token && !isTokenExpired(token)) && !!profile
  }

  setProfile(profile){
    localStorage.setItem('profile', profile)
  }

  setToken(idToken){
    localStorage.setItem('id_token', idToken)
  }

  getToken(){
    // Retrieves the user token from localStorage
    return localStorage.getItem('id_token')
  }

  getProfile(){
    return localStorage.getItem('profile')
  }

  logout(){
    localStorage.removeItem('id_token')
    localStorage.removeItem('profile')
  }
}
