import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import configureExerciseStore from './hooks-store/exercise-store'
import configureWorkoutStore  from './hooks-store/workout-store'
import configureUiStore from './hooks-store/ui-store';

configureExerciseStore();
configureWorkoutStore();
configureUiStore();

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
