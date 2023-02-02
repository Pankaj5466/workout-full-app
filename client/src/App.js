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

  {/* TO-DO: Add Navigation Menu Here */}
  <p>Menu Items Here</p>
  {/* <Link to="/">Home</Link> */}
  {/* <NavLink to  ="/">Home</NavLink> */}

  <div className='main-body'>
    <BrowserRouter>
        <nav>
            <Link to="/">Home</Link>
            <br/>
            <Link to ="/user-details">User Details</Link>
         </nav>
        <Routes>
        
          <Route path='/sign-up' element = {<SignUp/>} />
          <Route path='/login' element = {<Login/>} />

          <Route element = {<PrivateRoutes/>}>
              <Route path='/' element ={<Dashboard/>}/>
              <Route path='/user-details' element = {<div>user-details</div>} />
              <Route path='/sensitive' element = {<div>uu laa laa le</div>} />
              <Route path = '/workout-plan' element = {<WorkoutPlan/>} />

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
