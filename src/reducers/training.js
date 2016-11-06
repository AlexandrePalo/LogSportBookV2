import exerciseBlocks from './exerciseBlocks'
import { v4 } from 'node-uuid'

const training = (state, action) => {
  switch (action.type) {
    case 'ADD_TRAINING':
      return {
        id: action.id,
        description: action.description,
        place: action.place,
        date_begin: action.date_begin,
        date_end: action.date_end
      }
    case 'ADD_SERIE':
    case 'REMOVE_EXERCISEBLOCK':
    case 'REMOVE_SERIE':
      if (state.id !== action.id) {
        return state
      }
      return {
        ...state,
        exerciseBlocks: exerciseBlocks(state.exerciseBlocks, {...action, id: action.exerciseBlockId})
      }
    case 'ADD_EXERCISEBLOCK':
      if (state.id !== action.id) {
        return state
      }
      return {
        ...state,
        exerciseBlocks: exerciseBlocks(state.exerciseBlocks, {...action, id: v4()})
      }
      return toBeReturned
    default:
      return state
  }
}

export default training
