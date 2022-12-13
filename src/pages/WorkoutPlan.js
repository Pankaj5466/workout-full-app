import { useState } from "react";
import Calendar from "../components/Calendar";

const WorkoutPlan = () => {
    const [selectedDay,setSelectedDay] = useState(2);

    const handleDaySelect = (date) => {
        console.log('User selected ', date);

        setSelectedDay(date)
    }

    return (<>
        <p>WorkoutPlan Page</p>
        <Calendar handleDaySelect={handleDaySelect} selectedDay = {selectedDay}/>
    </>)
}

export default WorkoutPlan;
