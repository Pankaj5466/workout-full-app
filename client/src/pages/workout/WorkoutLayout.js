import { Outlet } from "react-router";

const WorkoutLayout = () => {
  return (
    <div>
      <h1>Workout Layout</h1>
      <Outlet />
    </div>
  );
};

export default WorkoutLayout;
