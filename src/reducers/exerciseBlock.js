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
      console.log(state.id)
      console.log(action.id)
      if (state.id !== action.id) {
        return state
      }
      console.log('passed to series')
      return {
        ...state,
        series: series(state.series, {...action, id: nextSerieId++})
      }
    default:
      return state
  }
}

export default exerciseBlock
