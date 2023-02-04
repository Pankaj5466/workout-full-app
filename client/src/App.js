import SignUpPage from './pages/SignUpPage'
import { Routes, Route, BrowserRouter,Navigate, Outlet, Link, NavLink } from 'react-router-dom'
import ExerciseList from './components/exercise/ExerciseList'
import ExceciseView from './components/exercise/ExerciseView'
import CreateDayPlan from './components/dayPlan/CreateDayPlan'
import './css/common.css'
import Dashboard from './pages/Dashboard'
import WorkoutPlan from './pages/WorkoutPlan'
import SignUp from './pages/Signup'
import Login from './pages/Login'
import { useSelector } from './hooks-store/store'
import Workout from './pages/Workout'

//Login with react-router-v6: https://www.youtube.com/watch?v=2k8NleFjG7I
//https://www.youtube.com/watch?v=2k8NleFjG7I

const PrivateRoutes = ()=>{
    const loginStatus = useSelector()
    .us.loginStatus;



    console.log('loginStatus: ',loginStatus);

    return (
      loginStatus ? <Outlet/> : <Navigate to='/login'/>
    )
}
function App () {

  return (<>
  <div className='main-body'>
    <p className='my-paragraph'>Paragram check</p>
    <BrowserRouter>
        <nav className='nav-menu'>
            <NavLink to="/">Home</NavLink>
            
            <NavLink to ="/user-details">User Details</NavLink>
            
            <NavLink to = "/workout-plan">Workout Plan </NavLink>
            
            {/* <Link to = "/workouts">Workout Details</NavLink> */}
            <NavLink to ='new-workout'>New Workout</NavLink>
            <NavLink to ='workout'>Workouts</NavLink>

         </nav>

        <Routes>
        
          <Route path='/sign-up' element = {<SignUp/>} />
          <Route path='/login' element = {<Login/>} />

          <Route element = {<PrivateRoutes/>}>
              <Route path='/' element ={<Dashboard/>}/>
              <Route path='/user-details' element = {<div>user-details</div>} />
              <Route path='/sensitive' element = {<div>uu laa laa le</div>} />
              <Route path = '/workout' element = {<Workout/>}/>
              <Route path = '/workout-plan' element = {<WorkoutPlan/>} />

              <Route path='/new-workout' element={<CreateDayPlan/>}></Route>
              {/* <Route path = '/workouts' element></Route> */}

          </Route>
{/*   
          <Route path='/exercise/:excerciseID' element = {<ExceciseView/>} />

          <Route path='/dayPlan' element={<CreateDayPlan/>}/>
          <Route path = '/workout-plan' element = {<WorkoutPlan/>} /> */}

          {/* <Route path='/single-workout-row' element = {<SingleWorkoutRow/>} />

          <Route path='/new-workout-plan' element = {<NewWorkoutPlan/>} /> */}
        </Routes>
    </BrowserRouter>
  </div>
    </>
  )
}

export default App
