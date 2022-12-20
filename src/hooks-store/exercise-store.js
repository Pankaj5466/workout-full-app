import excerciseList from '../sample-data/data'
import { initStore } from './store'

const initialExerciseData = excerciseList

const configureStore = () => {
  const actions = {
    MODIFY_EXERCISE: (curState, exerciseID) => {
      // logic of modification
      return curState // return new modified state
    }

  }

  initStore(actions, {
    es: {
      exerciseList: initialExerciseData
    }
  })
}

export default configureStore
