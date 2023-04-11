import { useLoaderData } from "react-router";
import { getWorkoutDetail } from "../../api/api";

const WorkoutDetailPage = () => {
    const workoutData = useLoaderData();

    return (
        <>
            <h3>Workout Detail Page</h3>
            <p>{workoutData.name} + {workoutData.id}</p>
        </>
    )
};

export default WorkoutDetailPage;

// export const loader = ({ params }) => {
//     const postId = params.id;

//     return getPost(postId);
//   }

export function loader({ params }) {
  const wID = params.id;

  return getWorkoutDetail(wID);
}
