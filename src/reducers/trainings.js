import { combineReducers } from 'redux'
import training from './training'
import { v4 } from 'node-uuid'
import moment from 'moment'

const initial = {
  '9d890dfd-9a4a-46cf-baf3-0b81a20787cf': {
    id: '9d890dfd-9a4a-46cf-baf3-0b81a20787cf',
    description: 'pectoraux',
    place: 'BasicFit Metz',
    date_begin: moment('2016-11-01 18:00:00'),
    date_end: moment('2016-11-01 20:00:00'),
    exerciseBlocks : {
      byId: {},
      allIds: []
    }
  }
}

const byId = (state = initial, action) => {
  switch (action.type) {
    case 'ADD_EXERCISEBLOCK':
    case 'ADD_SERIE':
    case 'REMOVE_EXERCISEBLOCK':
    case 'REMOVE_SERIE':
    case 'ADD_TRAINING':
      return {
        ...state,
        [action.id]: training(state[action.id], action)
      }
    case 'REMOVE_TRAINING':
      let t = Object.assign({}, state)
      delete t[action.id]
      return t
    default:
      return state
  }
}

const allIds = (state = ['9d890dfd-9a4a-46cf-baf3-0b81a20787cf'], action) => {
  switch (action.type) {
    case 'ADD_TRAINING':
      return [...state, action.id]
    case 'REMOVE_TRAINING':
      let index = state.indexOf(action.id)
      return state.slice(0, index).concat(state.slice(index + 1))
    default:
      return state
  }
}

export const getAllTrainings = (state) => {
  return state.allIds.map(id => state.byId[id])
}

export const getVisibleTraining = (state, filter) => {
  return state.byId[filter]
}

const trainings = combineReducers({
  byId,
  allIds
})

export default trainings
