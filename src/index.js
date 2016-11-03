import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'

import App from './components/app'
import rootReducer from './reducers/index'

const persistedState = {
  trainings: {
    byId: {
      1: {
        id: 1,
        description: 'pectoraux',
        exerciseBlocks : {
          byId: {
            1: {
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
            },
            2: {
              id: 2,
              ns: 5,
              d: 25,
              exercise: {
                id: 2,
                name: 'Dips'
              },
              series: []
            }
          },
          allIds: [1, 2]
        }
      }
    },
    allIds: [1]
  },
  visibilityFilterTraining: 1,
  visibilityFilterExerciseBlock: 1,
  exercises: {
    byId: {
      1: {
        id: 1,
        name: 'Développé couché'
      },
      2: {
        id: 2,
        name: 'Dips'
      },
      3: {
        id: 3,
        name: 'Poulies hautes'
      }
    },
    allIds: [1, 2, 3]
  }
}

const render = () => {
  ReactDOM.render(
    <Provider store={createStore(rootReducer, persistedState)}>
      <App />
    </Provider>,
    document.getElementById('root')
  )
}

render()
