import { Outlet, useLoaderData } from "react-router";
import { getWorkoutList } from "../../api/api";

const WorkoutTable = ({rows})=>{
    return (<>
        <table>
            <thead>
                <tr>
                    <td>id</td>
                    <td>Name</td>
                    <td>Description</td>
                </tr>
            </thead>   

            <tbody>
                {rows.map((row) => (<tr key = {row.id}>
                    <td>{row.id}</td>
                    <td>{row.name}</td>
                    <td>{row.description}</td>
                </tr>))}
            </tbody> 
        </table>
    </>)
};

const WorkoutList = () => {
    const rows = useLoaderData();

    return (
        <>
            <div className="workout-filter">
                <div>
                    <label>Workout Name</label>
                    <input placeholder="chest workout"></input>
                </div>
            </div>

            <div className="workout-table">
                <p>Table Component Here</p>
                <WorkoutTable rows ={rows}/>
            </div>

            <div className="workout-details">
                <Outlet/>
            </div>
        </>
    )
}

export default WorkoutList;

export const loader = async () => {
    return await getWorkoutList();
}