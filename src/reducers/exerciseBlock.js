import series from './series'
let nextSerieId = 4

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
        series: series(state.series, {...action, id: nextSerieId++})
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
