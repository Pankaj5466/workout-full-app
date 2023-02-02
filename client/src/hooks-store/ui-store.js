import { initStore } from './store'; //get store updater

const configureStore = () => {
  const actions = {
    SET_LOADING: (curState, payload) => {
      // logic of modification
      curState.us.loading = payload;
      return curState // return new modified state
    },
    SET_TOKEN: (curState,payload) =>{
      curState.us.token = payload;
      curState.us.loginStatus = true;
      return curState;
    },
    
  }

  //pass actions + initial state to store
  initStore(actions, {
    us:{
        loading:0,
        token:'',
        loginStatus:false
    }
  })
}

export default configureStore
