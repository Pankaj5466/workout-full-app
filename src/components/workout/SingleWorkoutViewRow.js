
const SingleWorkoutViewRow = ({ e }) => {
    console.log(e);
    return (
        <article id="exercise-17100" className="entry">

        <div className="main_info">

            <h5>
                <a href="https://fitnessprogramer.com/exercise/side-arm-raises/">{e.pageTitle}</a>
            </h5>
            <div className="exercise_meta equipment">
                <span>Equipment:</span>
                {
                    e.equipment.map(x=> x + ",")
                }				
            </div>
            
            <div className="exercise_meta primary_muscles">
                <span>Primary Muscles:</span>
                {e.pMuscleGroup.map(x=> x + ",")}				
            </div>          
        </div>
        
        <img className="thumbnails" src="https://fitnessprogramer.com/wp-content/uploads/2021/02/arm-circles.gif" alt="Side Arm Raises"/>

        <div className="actions">
            <a className="button" href="https://fitnessprogramer.com/exercise/side-arm-raises/">
                View Details				
            </a>
            <a className="programa_ekle button" data-eid="17100" href="#">
                Add 
                <i className="fas fa-plus"></i>
            </a>
        </div>

    </article>
    )
}

export default SingleWorkoutViewRow;