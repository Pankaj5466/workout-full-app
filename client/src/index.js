import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {BrowserRouter } from 'react-router-dom'
import {   createBrowserRouter,
  RouterProvider,Navigate, Outlet, Link, NavLink } from 'react-router-dom'

import configureExerciseStore from './hooks-store/exercise-store'
import configureWorkoutStore  from './hooks-store/workout-store'
import configureUiStore from './hooks-store/ui-store';

import Workout from './pages/Workout';

configureExerciseStore();
configureWorkoutStore();
configureUiStore();

const router = createBrowserRouter([
  {
    path: "/workout",
    element: <Workout />,
    // loader: rootLoader,
    children: [
      {
        path: "team",
        element: <Workout />,
        // loader: teamLoader,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
      <App />
      {/* <p>Hello</p>
    <RouterProvider router={router} /> */}
  </React.StrictMode>
)
