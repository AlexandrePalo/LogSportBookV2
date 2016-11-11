import { connect } from 'react-redux'
import LineChart from '../presentationals/LineChart'
import { getAllTrainings, getAllExerciseBlocksOneTraining, getAllSeriesOneExerciseBlock } from '../../reducers/index'

const mapStateToProps = (state) => {
  let labels = []
  let data = []
  getAllTrainings(state).map((t) => {
    let currentVolume = 0
    getAllExerciseBlocksOneTraining(state, t.id).map((e) => {
      getAllSeriesOneExerciseBlock(state, t.id, e.id).map((s) => {
        currentVolume += s.repetitions
      })
    })
    labels.push(t.date_begin)
    data.push(currentVolume)
  })

  return {
    labels,
    data
  }
}

export default connect(
  mapStateToProps,
  null
)(LineChart)
