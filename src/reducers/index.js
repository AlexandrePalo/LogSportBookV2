import { combineReducers } from 'redux'
import { trainings, visibilityFilter } from './trainings'
import { exercises } from './exercises'

const rootReducer = combineReducers({
  trainings,
  visibilityFilter,
  exercises,
})

export default rootReducer
