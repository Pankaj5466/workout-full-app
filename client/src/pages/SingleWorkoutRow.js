import './SingleWorkoutRow.css'

const SingleWorkoutRow = (props) => {
  const list = ['Barbell', 'Full Gym'];
  const p = "hello";

  return <div className='singleWorkout'>

        <div>
            <h2>OVERHEAD SHRUG </h2>
            <h3>EXERCISE / TRAPEZIUS</h3>

            <block>Equipment: </block>
            { list.map(e => <block key ={e}>{e + ','}</block>)}

            <br/>
            <block>Primary Muscle: </block>
            { list.map(e => <block key = {e}>{e + ' '}</block>)}
        </div>

        <img src="https://fitnessprogramer.com/wp-content/uploads/2022/07/overhead-shrug.gif" alt="Overhead Shrug"/>

        {/* Clicking it should open a dynamic-url , with excercise-id as params(so that page will display that)  */}
        <button type="button" className="btn btn-primary">View Details</button>
        <button type = 'button' className = 'btn btn-secondary ml-3' href="https://fitnessprogramer.com/login-register/">
            Add
            <i className="fa fa-plus ml-2"></i>
        </button>

    </div>
}

export default SingleWorkoutRow
