const user = (state={}, action) => {
  switch (action.type) {
  case 'CREATE_SESSION':
    return {...state, sessionToken: action.sessionToken}
  case 'REMOVE_SESSION':
    return {}
  case 'RECEIVE_USER':
    return {...state, id: action.response.response.user_id}
  default:
    return state
  }
}

export default user
