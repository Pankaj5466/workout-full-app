import SingleWorkoutViewRow from '../workout/SingleWorkoutViewRow'
import Modal from '../UI/Modal'
import { useState } from 'react'
import ExerciseList from '../exercise/ExerciseList'
import Button from '../UI/Button'
import { useDispatch, useSelector } from '../../hooks-store/store'
import CreateExerciseModal from '../../modals/CreateExerciseModal'
const CreateDayPlan = (props) => {
  const [showAddUserModal, setShowAddUserModal] = useState(false)
  const [showCreateExerciseModal,setShowCreateExerciseModal] = useState(false);

  let exerciseList = useSelector().ws;
  exerciseList = exerciseList.workoutState.find(item => item.dayID === props.dayID)
                ?.exerciseList || [];
  //IMP ABOVE:  in case exerciseList is undefined, taking or will convert it to empty array (so that .map will return valid JSX)

  const addExcerciseHandler = (e) => {
    console.log('addExerciseHandler')
    setShowAddUserModal(true)

    // TO-DO: open ExcersieList page in pop-up mode, so user can search & select the desired exercize
  }

  const handleReorderOperation = (type, eID) => {
    console.log(type, eID)
    // const eID = e.currentTarget.getAttribute('data-eID'); //TO-DO: check why they are not working
    // const eID2 = e.target.dataset.eID;
    // const eID = e.target.getAttribute('data-eid');

    let newExerciseList = exerciseList
    const idx = exerciseList.findIndex(id => id === eID)
    console.log(idx)

    newExerciseList = [...exerciseList.slice(0, idx), ...exerciseList.slice(idx, idx + 1), ...exerciseList.slice(idx + 1)]
    console.log(newExerciseList)
    // setExcericseList(newExerciseList);
  }

  const dispatch = useDispatch();

  const handleAddExercise = (eID) => {
    console.log('handling addExercieCLick');

    dispatch('ADD_EXERCISE',{
      dayID:props.dayID,
      eID
    });

  }
  const dayPlanComponent =
    <div className="container flex justify-content-center">
        <div className="d-flex">
            <ul>
                {exerciseList.map((eID,index) => <div key={`${eID}_${index}`} className="d-flex">
                    <SingleWorkoutViewRow  eID={eID} />

                    <Button data-eid={eID} onClick={() => handleReorderOperation('up', eID)}>Up </Button>
                    <Button data-eid={eID} onClick={() => handleReorderOperation('down', eID)}>Down </Button>
                </div>
                )}
            </ul>

        </div>
        <button className="btn btn-secondary justify-content-center"
            onClick={addExcerciseHandler}>Add</button>
            <Button>Hello2</Button>

        <Button 
          onClick = { () => {
              setShowCreateExerciseModal(!showCreateExerciseModal)
          }}
          > Create Exercise</Button>
    </div>

  const closeModalHandler = () => {
    console.log('close modal handler called\n')
    setShowAddUserModal(false)

    // TO-DO: Send the gather data to parent component
  }

  return (
        <>
        {dayPlanComponent}
        { showAddUserModal && <Modal title = 'Select Exercise' content = {<ExerciseList handleAddExercise = {handleAddExercise}/>} buttonName = 'Add Excerise(s)' onConfirm = {closeModalHandler}/> }
        { showCreateExerciseModal && <Modal title = 'Create Exercie' content = {<CreateExerciseModal/>} buttonName = 'Create' onConfirm = {()=>{}} /> }
        {/* { true && <p>Create Exercize</p>} */}
        </>
  )
}

export default CreateDayPlan
