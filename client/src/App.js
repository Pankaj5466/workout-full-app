import SignUpPage from './pages/SignUpPage'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import ExerciseList from './components/exercise/ExerciseList'
import ExceciseView from './components/exercise/ExerciseView'
import CreateDayPlan from './components/dayPlan/CreateDayPlan'
import './css/common.css'
import Dashboard from './pages/Dashboard'
import WorkoutPlan from './pages/WorkoutPlan'
import SignUp from './pages/Signup'
import Login from './pages/Login'

function App () {
  return (<>

  {/* TO-DO: Add Navigation Menu Here */}
  <p>Menu Items Here</p>

  <div className='main-body'>
    <BrowserRouter>
        <Routes>
          <Route path='/' element ={<Dashboard/>}/>
          <Route path='/sign-up' element = {<SignUpPage/>} />
          <Route path='/sign-up-two' element = {<SignUp/>} />
          <Route path='/login' element = {<Login/>} />
          <Route path='/exercises' element = {<ExerciseList/>}>
          </Route>

          <Route path='/exercise/:excerciseID' element = {<ExceciseView/>} />

          <Route path='/dayPlan' element={<CreateDayPlan/>}/>
          <Route path = '/workout-plan' element = {<WorkoutPlan/>} />

          {/* <Route path='/single-workout-row' element = {<SingleWorkoutRow/>} />

          <Route path='/new-workout-plan' element = {<NewWorkoutPlan/>} /> */}
        </Routes>
    </BrowserRouter>
  </div>
    </>
  )
}

export default App
