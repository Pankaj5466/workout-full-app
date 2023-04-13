import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
  Outlet,
  Route,
  createRoutesFromElements,
} from "react-router-dom";

import "./css/generic.css";
import { useSelector } from "./hooks-store/store";
import RootLayout from "./layout/RootLayout";
import { RootRoute, workoutRoute, workoutRouteTwo } from "./utils/route";

//Login with react-router-v6: https://www.youtube.com/watch?v=2k8NleFjG7I
//https://www.youtube.com/watch?v=2k8NleFjG7I

const PrivateRoutes = () => {
  return <Outlet />;
  const loginStatus = useSelector().us.loginStatus;

  console.log("loginStatus: ", loginStatus);

  return loginStatus ? <Outlet /> : <Navigate to="/login" />;
};


//index route is activated when parent route is hit
const router2 = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <RootLayout />,
    children: [
      { index: true, element: <p>Landing Page</p> },
        workoutRoute,
      // {
      //   path: '/blog/new',
      //   element: <NewPostPage />,
      //   action: newPostAction,
      // },
    ],
  },
  // {
  //   path: '/newsletter',
  //   action: newsletterAction,
  // },
]);

const router = workoutRouteTwo;

function App() {
  return <RouterProvider router={router} />;
}

export default App;
/*

       {/* <Routes>
       <Route path="/sign-up" element={<SignUp />} />
            <Route path="/login" element={<Login />} />

              <Route path="/" element={<Dashboard />} />
              <Route path="/user-details" element={<div>user-details</div>} />
              <Route path="/sensitive" element={<div>uu laa laa le</div>} />
              <Route path="/workout" element={<Workout />} />
              <Route path="/workout-plan" element={<WorkoutPlan />} />

              <Route path="/new-workout" element={<CreateDayPlan />}></Route>

       </Routes> 
       */
