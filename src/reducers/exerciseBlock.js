import series from './series'
import { v4 } from 'node-uuid'

const exerciseBlock = (state, action) => {
  switch (action.type) {
  case 'RECEIVE_SERIES':
    return {
      ...state,
      series: series(state.series, action)
    }
  default:
    return state
  }
}

export default exerciseBlock
