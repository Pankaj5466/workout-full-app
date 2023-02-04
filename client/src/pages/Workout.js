import { useState } from "react";
import AddExercise from "../modals/AddExercise";

const Workout = () =>{
    const [showModal,setShowModal] = useState(false);
    return <>
    <h1>Workout Details Page</h1>

        <form>
        <div>
          <label htmlFor="name">Workout Name:</label>
          <input type="text" id="name" />
        </div>
        <div>
          <label htmlFor="description">Workout Description:</label>
          <textarea id="description"></textarea>
        </div>
        <div>
          <label htmlFor="difficulty">Difficulty:</label>
          <select id="difficulty">
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </div>
        <div>
          <label>Selected User Exercises:</label>
          <div>
            <button type='button' onClick={()=> setShowModal(!showModal)}>Add Exercise</button>
            { showModal && <AddExercise/>}
          </div>
        </div>
      </form>
    </>
}

export default Workout;