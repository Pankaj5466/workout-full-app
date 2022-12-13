import {  useState } from "react";
import Calendar from "../components/Calendar";
import CreateDayPlan from "../components/dayPlan/CreateDayPlan";
import Card from "../components/Card";

const WorkoutPlan = () => {
    const [selectedDay,setSelectedDay] = useState({
        day:'01',
        month:'12',
        year:'2022'
    });

    const handleDaySelect = (date) => {
        console.log('User selected ', date);
        setSelectedDay(date);
    }

    //can we wrapped around useCallback
    // const dayID = () => { //derived data, so derive from already used state
    //     return `${selectedDay.day}/${selectedDay.month}/${selectedDay.year}`;
    // }

    const dayID = `${selectedDay.day}/${selectedDay.month}/${selectedDay.year}`;

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

