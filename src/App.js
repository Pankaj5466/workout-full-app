import SignUpPage from './pages/SignUpPage';
import {Routes,Route, BrowserRouter} from 'react-router-dom'
import ExerciseList from './components/exercise/ExerciseList';

function App() {
  return ( <>

  {/* TO-DO: Add Navigation Menu Here */}

  <div className='main-body'>
    <BrowserRouter>
        <Routes>
          <Route path='/sign-up' element = {<SignUpPage/>} />
          <Route path='/exercises' element = {<ExerciseList/>} />

          {/* <Route path='/single-workout-row' element = {<SingleWorkoutRow/>} />

          <Route path='/new-workout-plan' element = {<NewWorkoutPlan/>} /> */}
        </Routes>
    </BrowserRouter>
  </div>
    </>
  );
}

export default App;
