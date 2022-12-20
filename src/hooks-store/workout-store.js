import { initStore } from './store'

// const initalWorkoutPlan = [{
//     'Jan': [ //month
//         {
//             '01':['eID1','eID2','eID3'] //day plan which hold exercieID only      
//         },
//         {
//             '02':[], //2nd day of month
//         }
//     ]
// }];

const initalWorkoutPlan = [
    {
        'dayKeyID': ['eID1', 'eID2', 'eID3'], //dayKeyID = (day/month/year) = (day*31 + month*12 +( year-2020)*50) //up to 50year aheah
        //  Even better use key as string. dayKeyID  = Year:month:weekDay:date
        //Even better dayKeyID = '13/12/2022'

    },
    { 'dayKeyID2': [] },
    { 'dayID':'13/12/2022',
     'exerciseList': ['17097', '5678', '31520','17097'] 
    },
    { 'dayID':'01/12/2022',
     'exerciseList': ['17097', '5678', '31520','17097'] 
    },

];


const configureStore = () => {
    const actions = {
        MODIFY_EXERCISE: (curState, exerciseID) => {
            // logic of modification
            return curState // return new modified state
        },
        'ADD_EXERCISE':(curState,payload) => {
            console.log('ADD_EXERCISE Action Handler');
            // curState
            let dayObj = curState.ws.workoutState.find(item => item.dayID === payload.dayID);
            if(dayObj === undefined)
            {      
                curState.ws.workoutState.push({
                    dayID:payload.dayID,
                    exerciseList:[payload.eID]
                })
            }
            else
            {
                dayObj.exerciseList.push(payload.eID);
            }

            return curState;
        }

    }

    initStore(actions, {
        ws: { //workout-store
            workoutState: initalWorkoutPlan
        }
    })
}

export default configureStore
