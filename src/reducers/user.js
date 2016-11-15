import { combineReducers } from 'redux'

const user = (state={}, action) => {
  switch (action.type) {
  case 'CREATE_SESSION':
    return {...state, sessionToken: action.sessionToken}
  case 'REMOVE_SESSION':
    return {}
  case 'REQUEST_USER':
    return {...state, isFetching: true}
  case 'RECEIVE_USER':
    return {...state, id: action.response.response.user_id, isFetching: false}
  default:
    return state
  }
}

export default user
