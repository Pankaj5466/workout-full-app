import { Outlet, useLoaderData, useNavigate } from "react-router";
import "../../css/workout-list.css"
import { getWorkoutList } from "../../api/api";
import useStateThunk from "../../components/hooks/use-state-thunk";
import { useEffect } from "react";

const WorkoutTable = ({rows})=>{
    const navigate = useNavigate();

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
                {rows.map((row) => (<tr key = {row.id} onClick={() => navigate(`/workout/list/${row.id}`)}>
                    <td>{row.id}</td>
                    <td>{row.name}</td>
                    <td>{row.description}</td>
                </tr>))}
            </tbody> 
        </table>
    </>)
};

const WorkoutList = () => {
    // const rows =[]; //TO-DO: convert to useStateThunk
    const [rows,dispatch] = useStateThunk([]);

    useEffect(()=>{
        dispatch(loadWorkouotList());
    },[])

    return (
        <div className="workouts">
            <div className="workout-filter">
                <div className="filter">
                    <label>Workout Name: </label>
                    <input placeholder="chest workout"></input>
                </div>                
                
                {/* <ion-icon className='refresh-icon' name="refresh-circle-outline"></ion-icon> */}
                <div  className='refresh-icon'>
                    <ion-icon name="refresh"></ion-icon>
                </div>
            </div>

            <div className="workout-table">
                <p>Table Component Here</p>
                <WorkoutTable rows ={rows}/>
            </div>

            <div className="workout-details">
                <Outlet/>
            </div>
        </div>
    )
}

export default WorkoutList;

function loadWorkouotList(){

    return async (dispatch)=>{

        const getList = getWorkoutList; //you can define the function here, or you can import from some common location

        try{
            const {data} = await getList();

            dispatch(data);
        }catch(e){
            console.log('Some Error Happeened during fetching workout list');
        }
        finally{

        }
    }
}