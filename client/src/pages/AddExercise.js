import { useEffect, useState } from "react";
import Select from '../components/UI/Select'
import backendServer from "../api/axios-setup";
import { URL_GET_ALL_EXERCISE } from "../api/url-constant";

// const targetMuscleOptions = [
//     {value:"Chest",label:'Chest'},
//     {value:'hand',label:'habnd'},
//     {value:'leg',label:'leg'}
// ]

const AddExercise = () =>{

    const [searchOptions,setSearchOptions] = useState({
        targetMuscleOptions:[],
        targetEquipmentOptions:[]
    })

    //TO-DO: do we need useSearchParmas to change the url?
    const [filterOption,setFilterOption] = useState({
        'target-muscle':'',
        equipment:''
    })

    const [exerciseList,setExerciseList] = useState([]);
    const [selectedExercise,setSelectedExercise] = useState([]);

    useEffect(()=>{
        
        backendServer.get(URL_GET_ALL_EXERCISE)
            .then(resposne => resposne.data)
            .then(data => setExerciseList(data))
            .catch(e=> console.log('Unable to get all exercise list: ',e))
    },[]);

    console.log(exerciseList.slice(0,10));

    
    //TO-DO: the computation in this useEffect is too expensive & its for static value too.
    //please ask precomuted value from backend or fix it in frontend
    useEffect(()=>{

        // const value = exerciseList.map(e => e.target_muscle)
        //                 .filter((v,i,a) => a.indexOf(v) === i);
        // console.log('UNIQUE value: ',value);

        
        //get all filter value, either from backend OR calculate at frontend
        const uniqueTargetMuscles = exerciseList.reduce((acc, current) => {
                  const targetMuscles = current.primary_muscle_group.split(';');
            targetMuscles.forEach(targetMuscle => {
                const [muscle, weight] = targetMuscle.split(',');
                if (!acc.includes(muscle)) {
                    acc.push(muscle);
                }
            });
            return acc;
        }, []); //IMP: uniqueTargetMuscles is set to empty on first start

        const uniqueEqupment = exerciseList.reduce((acc,current)=>{
            const equipments = current.equipment.split(';');

            equipments.forEach(eq =>{
                if(!acc.includes(eq)) {
                    acc.push(eq);
                }
            })
            return acc;
        },[])

        console.log('uniqueTargetMuscles: ',uniqueTargetMuscles);
        console.log('uniqueEqupment: ',uniqueEqupment);

        setSearchOptions({
            targetMuscleOptions:uniqueTargetMuscles.map(e => ({value:e,label:e})),
            targetEquipmentOptions:uniqueEqupment.map(e => ({value:e,label:e}))
        })
        

    },[JSON.stringify(exerciseList)])

    const getFilteredExerciseList = () =>{
        console.log("filterOption: ",filterOption);

        return exerciseList.filter((e,index)=>{
            
            if(e.primary_muscle_group.split(';').includes(filterOption["target-muscle"])
                && e.equipment.split(';').includes(filterOption.equipment)
                ) 
                return true;
            return false;
        })
    }

    console.log('getFilteredExerciseList: ',getFilteredExerciseList())
    useEffect(()=>{

    },[getFilteredExerciseList])

    return <>
        {getFilteredExerciseList().length}
        {exerciseList.slice(0,10).map( e => (<p key={e.id}>{e.title}</p>))}

        <div className="search-filter">
            <label htmlFor= 'target-muscle'>
                Target Muscle:   
                <Select name='target-muscle' options = {searchOptions.targetMuscleOptions}
                    onChange={e => setFilterOption({...filterOption,
                        [e.target.name] : e.target.value
                    })}>

                </Select>
            </label>
            <label htmlFor= 'equipment'>
                Target Muscle:   
                <Select name='equipment' options = {searchOptions.targetEquipmentOptions}
                 onChange={e => setFilterOption({...filterOption,
                    [e.target.name] : e.target.value
                })}>

                </Select>
            </label>
        </div>
    </>
}

export default AddExercise;