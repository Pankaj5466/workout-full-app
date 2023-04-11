import SignUpPage from './pages/SignUpPage'
import { Routes, Route, BrowserRouter,Navigate, Outlet, Link, NavLink } from 'react-router-dom'
import ExerciseList from './components/exercise/ExerciseList'
import ExceciseView from './components/exercise/ExerciseView'
import CreateDayPlan from './components/dayPlan/CreateDayPlan'
// import './css/common.css'
import './css/generic.css'
import Dashboard from './pages/Dashboard'
import WorkoutPlan from './pages/WorkoutPlan'
import SignUp from './pages/Signup'
import Login from './pages/Login'
import { useSelector } from './hooks-store/store'
import Workout from './pages/Workout'
import Layout from './layout/Layout'

//Login with react-router-v6: https://www.youtube.com/watch?v=2k8NleFjG7I
//https://www.youtube.com/watch?v=2k8NleFjG7I

const PrivateRoutes = ()=>{
    return <Outlet/>;
    const loginStatus = useSelector()
    .us.loginStatus;



    console.log('loginStatus: ',loginStatus);

    return (
      loginStatus ? <Outlet/> : <Navigate to='/login'/>
    )
}
function App () {

  return (
    <Layout>
       <Routes>
       <Route path="/sign-up" element={<SignUp />} />
            <Route path="/login" element={<Login />} />

              <Route path="/" element={<Dashboard />} />
              <Route path="/user-details" element={<div>user-details</div>} />
              <Route path="/sensitive" element={<div>uu laa laa le</div>} />
              <Route path="/workout" element={<Workout />} />
              <Route path="/workout-plan" element={<WorkoutPlan />} />

              <Route path="/new-workout" element={<CreateDayPlan />}></Route>

       </Routes>
    </Layout>
  )
}

export default App
