import {  useState } from "react";
import Calendar from "../components/Calendar";
import CreateDayPlan from "../components/dayPlan/CreateDayPlan";
import Card from "../components/Card";
import Button from "../components/UI/Button";

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

    //dayID is derivedData
    const dayID = `${selectedDay.day}/${selectedDay.month}/${selectedDay.year}`;

    return (<Card>
        <Calendar handleDaySelect={handleDaySelect} selectedDay = {selectedDay}/>
        <p>Plan For Selected Date is below: </p>

        <CreateDayPlan dayID = {dayID} 
            handleAddExercise ={(eID)=>{
            console.log('Exercise ID: ',eID);
        }}/>


         <Button onClick = {
            ()=>{
                console.log('TO-DO: link to backend call for creation of workout')
            }
         }>Create Workout</Button>
        <Button>Edit Workout / Save Workout</Button>
    </Card>)
}

export default WorkoutPlan;

