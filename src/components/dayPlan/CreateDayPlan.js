import SingleWorkoutViewRow from "../workout/SingleWorkoutViewRow";

const CreateDayPlan = (props) =>{
    
    const exerciseList = ['17097','5678','31520']; //list of excerciseID

    const addExcerciseHandler =(e)=>{
        console.log('addExerciseHandler');

        //TO-DO: open ExcersieList page in pop-up mode, so user can search & select the desired exercize
    }

    return (
        <>
        <div className="container flex justify-content-center">
            <p>CreateDayPlan Component</p>
            <ul>
                {exerciseList.map(e => <SingleWorkoutViewRow eID={e} key={e}/>)}
            </ul>
            <button className="btn btn-secondary justify-content-center"
                onClick={addExcerciseHandler}>Add</button>
        </div>
        </>
       
    )
}

export default CreateDayPlan;