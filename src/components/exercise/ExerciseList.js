import Select from 'react-select'
import SingleWorkoutViewRow from '../workout/SingleWorkoutViewRow';
const ExerciseList = () => {

    const targetMuscleOptions = [
        { value: 'abs', label: 'abs' },
        { value: 'Back/Wing', label: 'Back/Wing' },
    ];

    const exerciseList = ['12','14','15']; //list of excerciseID

    return (
        <>

            <div className='d-flex justify-content-around'>
                <label>Target Muscle:
                    <Select options={targetMuscleOptions}
                        isSearchable={false}
                        isClearable={true}
                        placeholder='Target Muscle'
                        onChange={(entry) => {
                            console.log(entry);
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
                    <SingleWorkoutViewRow eID={eID} key = {eID}/>)}
            </section>

        </>
    )
}

export default ExerciseList;