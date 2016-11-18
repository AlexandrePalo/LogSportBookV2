import exerciseBlock from './exerciseBlock'
import { combineReducers } from 'redux'
import moment from 'moment'

// TODO: muscularGroup -> _muscularGroup
const byId = (state = {}, action) => {
  switch (action.type) {
  case 'RECEIVE_SERIES':
  case 'ADD_SERIE_SUCCESS':
  case 'REMOVE_SERIE_SUCCESS':
    return {
      ...state,
      [action.exerciseBlockId]: exerciseBlock(state[action.exerciseBlockId], action)
    }
  case 'ADD_EXERCISEBLOCK_SUCCESS':
    var res = action.response
    return {
      ...state,
      [res._id]: {
        id: res._id,
        isFectching: false,
        index: res.index,
        date_begin: moment(res.date_begin),
        date_end: moment(res.date_end),
        exercise: {
          id: res._exercise._id,
          name: res._exercise.name,
          muscularGroup: res._exercise.muscularGroup
        },
        series: {
          byId: {},
          allIds: [],
          isFetching: false
        }
      }
    }
  case 'REMOVE_EXERCISEBLOCK_SUCCESS':
    var eb = Object.assign({}, state)
    delete eb[action.response._id]
    return eb
  default:
    return state
  }
}

const allIds = (state = [], action) => {
  switch (action.type) {
  case 'ADD_EXERCISEBLOCK_SUCCESS':
    return [...state, action.response._id]
  case 'REMOVE_EXERCISEBLOCK_SUCCESS':
    var index = state.indexOf(action.response._id)
    return state.slice(0, index).concat(state.slice(index + 1))
  default:
    return state
  }
}

const isFetching = (state = false, action) => {
  switch (action.type) {
  default:
    return state
  }
}

const exerciseBlocks = combineReducers({
  byId,
  allIds,
  isFetching
})

export default exerciseBlocks

export const getAllExerciseBlocks = (state) => {
  return state.allIds.map(id => state.byId[id])
}
