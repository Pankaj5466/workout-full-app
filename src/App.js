import SignUpPage from './pages/SignUpPage';
import SingleWorkoutRow from './pages/SingleWorkoutRow';
import {Routes,Route, BrowserRouter} from 'react-router-dom'
import NewWorkoutPlan from './components/workout/NewWorkoutPlan';

function App() {
  return ( <>

  {/* TO-DO: Add Navigation Menu Here */}

  <div className='main-body'>
    <h1>App.js File</h1>
    <BrowserRouter>
        <Routes>
          <Route path='/sign-up' element = {<SignUpPage/>} />

          <Route path='/single-workout-row' element = {<SingleWorkoutRow/>} />

          <Route path='/new-workout-plan' element = {<NewWorkoutPlan/>} />
        </Routes>
    </BrowserRouter>
  </div>
    </>
  );
}

export default App;
