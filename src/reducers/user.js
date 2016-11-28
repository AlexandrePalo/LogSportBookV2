import { combineReducers } from 'redux'

const user = (state={
  isFetching: false,
  dataChecked: false,
  isAuthenticated: false},
  action) => {

  switch (action.type) {
  case 'LOGIN_REQUEST':
    return {
      isFetching: true,
      isAuthenticated: false,
      dataChecked: false,
      creds: action.creds
    }
  case 'LOGIN_SUCCESS':
    localStorage.setItem('profile', action.profile)
    localStorage.setItem('id_token', action.tokenId)
    localStorage.setItem('access_token', action.accessToken)
    return {
      isFetching: false,
      dataChecked: false,
      isAuthenticated: true,
      tokenId: action.tokenId,
      accessToken: action.accessToken,
      profile: action.profile
    }
  case 'REQUEST_TRAININGS':
    return action.first ? {...state, dataChecked: false} : state
  case 'RECEIVE_TRAININGS':
    return action.first ? {...state, dataChecked: true} : state
  default:
    return state
  }
}

export default user
