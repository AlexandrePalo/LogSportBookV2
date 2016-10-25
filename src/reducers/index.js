import { combineReducers } from 'redux'
import { trainings, visibilityFilter } from './trainings'

const rootReducer = combineReducers({
  trainings,
  visibilityFilter,
})

export default rootReducer
