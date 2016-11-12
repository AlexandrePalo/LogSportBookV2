import series from './series'
import { v4 } from 'node-uuid'

const exerciseBlock = (state, action) => {
  switch (action.type) {
  case 'ADD_EXERCISEBLOCK':
    return {
      id: action.id,
      d: 20,
      exercise: action.exercise,
      series: {
        byId: {},
        allIds: []
      }
    }
  case 'ADD_SERIE':
    if (state.id !== action.id) {
      return state
    }
    return {
      ...state,
      series: series(state.series, {...action, id: action.idSerie})
    }
  case 'REMOVE_SERIE':
    if (state.id !== action.id) {
      return state
    }
    return {
      ...state,
      series: series(state.series, {...action, id: action.serieId})
    }
  default:
    return state
  }
}

export default exerciseBlock
