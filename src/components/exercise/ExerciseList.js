import Select from 'react-select'
import SingleWorkoutViewRow from '../workout/SingleWorkoutViewRow'
const ExerciseList = (props) => {
  const targetMuscleOptions = [
    { value: 'abs', label: 'abs' },
    { value: 'Back/Wing', label: 'Back/Wing' }
  ]

  const exerciseList = ['17097', '5678', '31520'] // list of excerciseID

  return (
        <>
            <div className='d-flex justify-content-around'>
                <label>Target Muscle:
                    <Select options={targetMuscleOptions}
                        isSearchable={false}
                        isClearable={true}
                        placeholder='Target Muscle'
                        onChange={(entry) => {
                          console.log(entry)
                        }}
                    />
                </label>

                <label>
                    Equipment:
                    <Select options={[]}
                        isSearchable={false}
                        isClearable={true} />
                </label>

                <label>
                    Difficulty:
                    <Select options={[]}
                        isSearchable={false}
                        isClearable={true} />
                </label>
            </div>

            <section>
               { exerciseList.map(eID =>
                <div key = {eID}  
                  onClick = {() => props.handleAddExercise(eID)}>
                    <SingleWorkoutViewRow eID={eID}/>
                  </div>)}
            </section>

        </>
  )
}

export default ExerciseList
