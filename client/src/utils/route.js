import {
  Outlet,
  Route,
  createBrowserRouter,
  createRoutesFromChildren,
} from "react-router-dom";
import NewWorkout from "../pages/NewWorkout";
import WorkoutDetail, {
  loader as WorkoutDetailLoader,
} from "../pages/workout/WorkoutDetail";
import { saveWorkout } from "../api/api";
import WorkoutLayout from "../pages/workout/WorkoutLayout";
import RootLayout from "../layout/RootLayout";
import WorkoutList,{loader as workoutListLoader} from "../pages/workout/WorkoutList";

export const workoutRoute = {};
//export const workoutRoute3 = {
//  path: "/workout",
//  // element: <WorkoutLayout />, //we do not have general layout for workout. So we will not use it for now
//  //IMPORTANT: passing element here mean, you must use <Outlet> inside WorkoutLayout.js, else child componet of this nested route will not be rendered
//  //REF: https://reactrouter.com/en/main/route/route#layout-routes
//
//  element: <WorkoutLayout />,
//  exact: true,
//  children: [
//    {
//      index: true,
//      element: <p>Main Workout Table Page</p>,
//    },
//    {
//      path: "create-new",
//      element: <NewWorkout />,
//      // action:newWorkoutAction,
//    },
//    {
//      path: "details/:id",
//      element: <WorkoutDetailPage />,
//      loader: workoutDetailLoader,
//    },
//    {
//      path: "edit/:id",
//      element: <p>Edit Workout Page</p>,
//    },
//  ],
//};

export const workoutRouteTwo = createBrowserRouter(
  createRoutesFromChildren(
    <Route path="/" element={<RootLayout />}>
      <Route path="/workout" element={<WorkoutLayout />}>

        <Route path="list" element= {<WorkoutList/>} loader={workoutListLoader}>
            <Route path=":id" element={<WorkoutDetail/>} loader={WorkoutDetailLoader}/>
        </Route>

        <Route path="edit/:id" element={<p>Edit Workout Page</p>} />

        <Route path="create" element = {<NewWorkout/>}/>
      </Route>
    </Route>
  )
);
