import { initStore } from './store'; //get store updater

const configureStore = () => {
  const actions = {
    SET_LOADING: (curState, payload) => {
      // logic of modification
      curState.us.loading = payload;
      return curState // return new modified state
    },
    UNSET_LOADING:(curState,payload)=>{
        curState.us.loading = payload;
    },
  }

  //pass actions + initial state to store
  initStore(actions, {
    us:{
        loading:0,
    }
  })
}

export default configureStore
