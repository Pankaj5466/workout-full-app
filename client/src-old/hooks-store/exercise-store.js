import excerciseList from '../sample-data/data'
import { initStore } from './store'; //get store updater

const initialExerciseData = excerciseList

const configureStore = () => {
  const actions = {
    MODIFY_EXERCISE: (curState, exerciseID) => {
      // logic of modification
      return curState // return new modified state
    }

  }

  //pass actions + initial state to store
  initStore(actions, {
    es: {
      exerciseList: initialExerciseData
    }
  })
}

export default configureStore
