import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
  Outlet,
} from "react-router-dom";

// import './css/common.css'
import "./css/generic.css";
import { useSelector } from "./hooks-store/store";
import RootLayout from "./layout/RootLayout";
import Workout from "./pages/Workout";
import WorkoutDetailPage,{loader as workoutDetaiLoader} from "./pages/workout/WorkoutDetailPage";

//Login with react-router-v6: https://www.youtube.com/watch?v=2k8NleFjG7I
//https://www.youtube.com/watch?v=2k8NleFjG7I

const PrivateRoutes = () => {
  return <Outlet />;
  const loginStatus = useSelector().us.loginStatus;

  console.log("loginStatus: ", loginStatus);

  return loginStatus ? <Outlet /> : <Navigate to="/login" />;
};

//index route is activated when parent route is hit
const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <RootLayout />,
    children: [
      { index: true, element: <p>Landing Page</p> },
      {
        path: '/workout',
        // element: <WorkoutLayout />, //we do not have general layout for workout. So we will not use it for now
        //IMPORTANT: passing element here mean, you must use <Outlet> inside WorkoutLayout.js, else child componet of this nested route will not be rendered
        exact: true,
        children: [
          {
            index: true,
            element: <Workout/>,
          },
          {
            path: 'create-new',
            element: <p> New Workout Create Page </p>,
            // loader: blogPostLoader,
          },
          {
            path: ':id',
            element: <WorkoutDetailPage />,
            loader: workoutDetaiLoader,
          },
        ],
      },
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
