import {Outlet} from "react-router-dom";
import Workout from "../pages/Workout";
import WorkoutDetailPage,{loader as workoutDetailLoader} from "../pages/workout/WorkoutDetailPage";

export const workoutRoute =   {
    path: "/workout",
    // element: <WorkoutLayout />, //we do not have general layout for workout. So we will not use it for now
    //IMPORTANT: passing element here mean, you must use <Outlet> inside WorkoutLayout.js, else child componet of this nested route will not be rendered
    //REF: https://reactrouter.com/en/main/route/route#layout-routes
  
    element: <>
        <h3>Workout Related Operations</h3>
        <Outlet />
      </>
    ,
    exact: true,
    children: [
      {
        index: true,
        element: <p>Main Workout Table Page</p>,
      },
      {
        path: "create-new",
        element:<Workout/>,
        action:newWorkoutAction,
      },
      {
        path: "details/:id",
        element: <WorkoutDetailPage />,
        loader: workoutDetailLoader,
      },
      {
        path: "edit/:id",
        element: <p>Edit Workout Page</p>,
      }
    ],
  };