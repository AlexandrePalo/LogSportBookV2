import exerciseBlocks from './exerciseBlocks'
import { v4 } from 'node-uuid'

const training = (state, action) => {
  switch (action.type) {
  case 'REQUEST_SERIES':
  case 'RECEIVE_SERIES':
  case 'ADD_EXERCISEBLOCK_SUCCESS':
  case 'ADD_SERIE_SUCCESS':
  case 'REMOVE_EXERCISEBLOCK_SUCCESS':
  case 'REMOVE_SERIE_SUCCESS':
    return {
      ...state,
      exerciseBlocks: exerciseBlocks(state.exerciseBlocks, action)
    }
  default:
    return state
  }
}

export default training
