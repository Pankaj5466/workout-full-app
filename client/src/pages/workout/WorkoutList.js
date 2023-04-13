import { Outlet } from "react-router";

const WorkoutList = () => {
    
    return (
        <>
            <div className="workout-filter">
                <p>Filter Component Here</p>
            </div>

            <div className="workout-table">
                <p>Table Component Here</p>
            </div>

            <div className="workout-details">
                <Outlet/>
            </div>
        </>
    )
}

export default WorkoutList;