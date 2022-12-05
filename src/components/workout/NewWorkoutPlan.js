import SingleWorkoutViewRow from "./SingleWorkoutViewRow";
import excerciseList from "../../sample-data/data";
import DaySelector from "./DaySelector";
import ExcerciseDetails from "./ExcerciseDetails";
const NewWorkoutPlan = (props) => {

    return (<>
        <DaySelector/>


        <ExcerciseDetails/>
        <div className=".wpt_exercise_archive">
            {
                excerciseList.slice(1).map(e=> <SingleWorkoutViewRow key = {e.eID} e={e}/>)
            }
        </div>
        {/* // Button for add excercise */}
        </>
    );
}

export default NewWorkoutPlan;