


//We will create a axios adapterHook.
// will take all parameter which axios take, but will return state: {sending,success,error} and data 

import { useState } from "react"

//axios.get will return a promise
const useAxios = (callbackFunction) =>{
    const requestStatus = useState('idle'); //idle, sending, success, error



    return {
        requestStatus,

    }
}

const test = () =>{
    const [data,errorState] = useAxios(requestConfig);
    //i want that change in eith

    axios.get(url)
        .then(response =>{
            setUserName(response.data.name)
        })
        .catch(e =>{})
}