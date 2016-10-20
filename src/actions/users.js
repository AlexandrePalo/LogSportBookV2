import { ADD_USER } from './actionTypes'

export addUser (user) => {
  return {
    type: ADD_USER,
    email: user.email,
    last_name: user.last_name,
    first_name: user.first_name,
    password: user.password,
    birth_date: user.birth_date
  }
}
