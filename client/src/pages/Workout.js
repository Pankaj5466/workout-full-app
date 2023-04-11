import { useState } from "react";
import Button from "../components/UI/Button";
import AddExercise from "./AddExercise";
import Modal from "../components/UI/Modal";
import "./workout.css";

const Workout = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="container">
      <h2 className="heading-secondary">Create Workout</h2>
      <div>
        <form className="workout-form">
          <div>
            <label htmlFor="name">Workout Name:</label>
            <input type="text" id="name" required />
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
          <div className="add-exercise-container"></div>
          <div className="selected-exercise">
            <div>
              <p className="exercise-text">Selected User Exercises:</p>
              <ul className="exercise-list">
                <li className=".exercise-list-item">
                  <li>Iteam1</li>
                  <li>Iteam1</li>
                  <li>Iteam1</li>
                  <li>Iteam1</li>
                  <li>Iteam1</li>
                  <li>Iteam1</li>
                </li>
                <a
                  type="button"
                  className="btn btn--full"
                  onClick={() => setShowModal(!showModal)}
                >
                  Add Exercise
                </a>
                {showModal && (
                  <Modal
                    title="Add Exercise"
                    content={<AddExercise />}
                    buttonName="Add"
                    onConfirm={() => setShowModal(false)}
                  />
                )}
              </ul>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Workout;
