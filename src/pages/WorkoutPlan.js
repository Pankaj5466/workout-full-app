import { useReducer, useState } from "react";
import Calendar from "../components/Calendar";
import CreateDayPlan from "../components/dayPlan/CreateDayPlan";
import Card from "../components/Card";

const exerciseEditorReducer = () =>{

}
const WorkoutPlan = () => {
    const [selectedDay,setSelectedDay] = useState(2);
    const [dayID,setDayID] = useState('');

    const [exerciseIDList,setExcericseList] = useReducer(exerciseEditorReducer);

    const handleDaySelect = (date) => {
        console.log('User selected ', date);

        setSelectedDay(date);

        setDayID('13/12/2022');
    }

    return (<Card>
        <p>WorkoutPlan Page</p>
        <Calendar handleDaySelect={handleDaySelect} selectedDay = {selectedDay}/>
        <p>Plan For Selected Date is below: </p>

        <CreateDayPlan dayID = {dayID} 
            handleAddExercise ={(eID)=>{
            console.log('Exercise ID: ',eID);
        }}/>
    </Card>)
}

export default WorkoutPlan;

