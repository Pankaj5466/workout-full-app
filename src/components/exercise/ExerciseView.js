import { useParams } from 'react-router-dom'
import { useSelector } from '../../hooks-store/store'

const ExceciseView = (props) => {
//   const location = useLocation()
  const params = useParams()

  const { excerciseID } = params
  console.log('excerciseID: ', excerciseID)

  // Now we get the excerciseDetails.
  // Get the corresponding details for excercise using backend-query & display on this page

  const e = useSelector()
    .es.exerciseList.find(e => e.eID === '5678')

  const ex = {
    ...e,
    benifits: ['yes', 'no', 'benfits']

  }

  console.log(ex)

  return (
        <>
            <div className="title_bar">
                <div className="theme_canvas">

                    <h1 className="page_title">Pull-Up</h1>

                    <div className="page_subtitle">
                        Exercise / Back / Wing</div>

                </div>
            </div>

            <div className='d-flex'>
                <div className='d-flex flex-column'>

                    <p className='p-2 m-2 h5'>How To Pull-Up</p>
                    <div className='d-flex'>
                        <img className='aligncenter' src="https://fitnessprogramer.com/wp-content/uploads/2021/02/arm-circles.gif" alt="Side Arm Raises" /><img ></img>

                        <div className='m-2'>
                            <h7>Muscle Group:</h7>
                            <ul>
                                {ex.pMuscleGroup.map(m => <li key = {m}>{m}</li>)}
                            </ul>

                            <h7>Equipment</h7>
                            <div>
                                <ul>
                                    <li><span>Full Gym</span></li>
                                    <li><span>Machine</span></li>
                                </ul>
                            </div>

                        </div>
                    </div>

                    <h6 > Pull-Up Benifits</h6>
                    <ul>
                        {ex.benifits.map(b => <li key={b}>{b}</li>)}
                    </ul>

                    <h6>Muscles Worked in the Lever Preacher Curl</h6>
                    <div className='d-flex'>
                        <ul>
                            {ex.targetMuscle.map(m => <li key={m.name}>{`${m.name} :  ${m.percentage}`}</li>)}
                            {/* //TO-DO: Replace this compoenet as color-filled component */}
                        </ul>
                        <img className='aligncenter' src="https://fitnessprogramer.com/wp-content/uploads/2021/02/biceps-anatomy-300x300.png" alt="Side Arm Raises" /><img ></img>

                    </div>

                </div>

            </div>

        </>
  )
}

export default ExceciseView
