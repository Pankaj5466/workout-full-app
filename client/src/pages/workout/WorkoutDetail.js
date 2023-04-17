import { useLoaderData, useParams } from "react-router";
import { getWorkoutDetail } from "../../api/api";
import { useEffect, useState } from "react";
import useData from "../../components/hooks/use-data";

const WorkoutDetailPage = () => {
    const{ id } = useParams();
    const data = useData(`/workout/${id}`);

    //IMPORTANT: observe that we do not need to create a new state. We can simply extract the needed when data is rerendered
    const transformWorkoutData = ()=>{
        return{
            name: data?.name || '',
            id: data?.id || '',
            exercises: data?.exercises || []
        }
    }

    useEffect(()=>{
        console.log(data);
    },[data])

    return (
        <>
            <h3>Workout Detail Page</h3>
            <p>{transformWorkoutData().name} + {transformWorkoutData().id}</p>
            {transformWorkoutData().exercises.map((exercise) => (
                // <ExerciseRow/>
                <p>{exercise}</p>
            ))}
        </>
    )
};

export default WorkoutDetailPage;