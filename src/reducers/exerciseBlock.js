import series from './series'
let nextSerieId = 4

const exerciseBlock = (state, action) => {
  switch (action.type) {
    case 'ADD_EXERCISEBLOCK':
      return {
        id: action.id,
        d: 20,
        exercise: action.exercise,
        series: []
      }
    case 'ADD_SERIE':
      if (state.id !== action.id) {
        return state
      }
      return {
        ...state,
        series: series(state.series, {...action, id: nextSerieId++})
      }
    default:
      return state
  }
}

export default exerciseBlock
