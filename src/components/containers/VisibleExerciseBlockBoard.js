import ExerciseBlockBoard from '../presentationals/ExerciseBlockBoard'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  const exerciseBlock = {
    id: 1,
    d: 20,
    exercise: {
      id: 1,
      name: 'Développé couché'
    },
    series: [
      {
        id: 1,
        repetitions: 10,
        load: 80
      },
      {
        id: 2,
        repetitions: 9,
        load: 100
      },
      {
        id: 3,
        repetitions: 8,
        load: 90
      }
    ]
  }
  return {
    id: exerciseBlock.id,
    name: exerciseBlock.exercise.name,
    series: exerciseBlock.series
  }
}

const VisibleExerciseBlockBoard = connect(
  mapStateToProps,
  null
)(ExerciseBlockBoard)

export default VisibleExerciseBlockBoard
