import exerciseBlocks from './exerciseBlocks'
import { v4 } from 'node-uuid'

const training = (state, action) => {
  switch (action.type) {
  case 'REQUEST_SERIES':
  case 'RECEIVE_SERIES':
    return {
      ...state,
      exerciseBlocks: exerciseBlocks(state.exerciseBlocks, action)
    }
  default:
    return state
  }
}

export default training
