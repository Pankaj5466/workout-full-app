import SingleWorkoutViewRow from "../workout/SingleWorkoutViewRow";
import Card from "../Card";
import Modal from "../UI/Modal";
import { useState } from "react";
import ExerciseList from "../exercise/ExerciseList";
const CreateDayPlan = (props) => {
    const [showAddUserModal,setShowAddUserModal] = useState(false);
    const exerciseList = ['17097', '5678', '31520']; //list of excerciseID

    const addExcerciseHandler = (e) => {
        console.log('addExerciseHandler');
        setShowAddUserModal(true);

        //TO-DO: open ExcersieList page in pop-up mode, so user can search & select the desired exercize
    }

    const dayPlanComponent = 
    <Card className="container flex justify-content-center">
        
        <ul>
            {exerciseList.map(e => <SingleWorkoutViewRow eID={e} key={e} />)}
        </ul>
        <button className="btn btn-secondary justify-content-center"
            onClick={addExcerciseHandler}>Add</button>
    </Card>

    const closeModalHandler = ()=>{
        console.log('close modal handler called\n');
        setShowAddUserModal(false);

        //TO-DO: Send the gather data to parent component

    }

    

    return (
        <>
        {dayPlanComponent}
        { showAddUserModal && <Modal titel = 'Add User' content = {<ExerciseList/>} buttonName = 'Add Excerise(s)' onConfirm = {closeModalHandler}/>  }
        </>
    )
}

export default CreateDayPlan;