import { useEffect, useState } from "react";
import { act } from "react-dom/test-utils";

/* using variable let will limit the variable scope to this file only*/
let globalState = {};
let listners = [];
let actions  = {};

export const useSelector=()=>{
    const setState = useState(globalState).at(1);

    useEffect(()=>{
        listners.push(setState);

        return ()=>{
            listners = listners.filter(li => li !== setState);
        }
    },[setState]);

    return globalState; //Return the current state
}

export const useDispatch = ()=>{
    const dispatch = (actionIdentifier,payload) =>{
        const newState = {...globalState,...newState};

        for(const listner of listners){
            listner(globalState); //call each component setState will latest globalState data
        }
    }

    return dispatch;
}


//Initial State of Store
export const initStore = (userActions,initalState)=>{
    if(initStore){
        globalState = {...globalState,...initalState};
    }

    actions  = {...actions,...userActions};
}