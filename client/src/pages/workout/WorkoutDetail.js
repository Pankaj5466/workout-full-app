import { useLoaderData } from "react-router";
import { getWorkoutDetail } from "../../api/api";

const WorkoutDetailPage = () => {
    const workoutData = { //TO-DO: poulate with data from server
        id: 1,
        name: "Chest Workout",
    };

    return (
        <>
            <h3>Workout Detail Page</h3>
            <p>{workoutData.name} + {workoutData.id}</p>
            {workoutData.exercises.map((exercise) => (
                <ExerciseRow/>
            ))}
        </>
    )
};

export default WorkoutDetailPage;