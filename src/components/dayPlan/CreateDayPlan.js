import SingleWorkoutViewRow from "../workout/SingleWorkoutViewRow";
import Card from "../Card";
import Modal from "../UI/Modal";
import { useState } from "react";
import ExerciseList from "../exercise/ExerciseList";
import Button from "../UI/Button";
import { components } from "react-select";
const CreateDayPlan = (props) => {
    const [showAddUserModal,setShowAddUserModal] = useState(false);
     
    const [exerciseList,setExcericseList] = useState(['17097', '5678', '31520']); //list of excerciseID

    const addExcerciseHandler = (e) => {
        console.log('addExerciseHandler');
        setShowAddUserModal(true);

        //TO-DO: open ExcersieList page in pop-up mode, so user can search & select the desired exercize
    }

    const handleReorderOperation = (type,eID)=>{
        console.log(type,eID)
        // const eID = e.currentTarget.getAttribute('data-eID'); //TO-DO: check why they are not working
        // const eID2 = e.target.dataset.eID;
        // const eID = e.target.getAttribute('data-eid');
        
        let newExerciseList  = exerciseList;
        const idx = exerciseList.findIndex(id => id === eID);
        console.log(idx);

        newExerciseList = [...exerciseList.slice(0,idx),...exerciseList.slice(idx,idx+1),...exerciseList.slice(idx+1)];
        console.log(newExerciseList);
        // setExcericseList(newExerciseList);


    }
    const dayPlanComponent = 
    <Card className="container flex justify-content-center">
        <div className="d-flex">
            <ul>
                {exerciseList.map(eID => <div className="d-flex">
                    <SingleWorkoutViewRow eID={eID} key={eID} />

                    <Button key = {eID+'up'} data-eid={eID} onClick={()=>handleReorderOperation('up',eID)}>Up </Button>
                    <Button key = {eID+'down'} data-eid={eID} onClick={()=>handleReorderOperation('down',eID)}>Down </Button>
                </div>
                )}
            </ul>
           
        </div>
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
        { showAddUserModal && <Modal title = 'Select Exercise' content = {<ExerciseList/>} buttonName = 'Add Excerise(s)' onConfirm = {closeModalHandler}/>  }
        </>
    )
}

export default CreateDayPlan;