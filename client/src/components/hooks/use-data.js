import { useState,useEffect } from "react";
import backendServer from "../../api/axios-setup";
//getting GET request in proper manner & avoiding RACE condition

//SOURCE: https://react.dev/learn/you-might-not-need-an-effect#fetching-data

/* Explain: why passing async function to useEffect will not work? 
IMPORTANT: useEffect accepts only a callback function & NOT a PROMISE FUNCTION. 
    so below will not work.
    useEffect(async ()=>{

        try{
            const {data} = await getWorkoutDetail(id);
            setState(data);
        }catch(e){
            console.log(e);
        }

    },[id])
    */

// Checkout two ways to call async function inside useEffect (a) using .then & .catch (b) using new defination of async/await then calling it inside useEffect
const  useDataOne = (url)=> {
    const [data, setData] = useState(null);

    useEffect(() => {
      let ignore = false;

      axios.get(url)
        .then(response => response.data)
        .then(data => 
        {
          if (!ignore) 
          {
            setData(data);
          }
        });

       //Reset he ignore during cleanup, to avoid the race condition.
      return () => {
        ignore = true;
      };
    }, [url]);

    return data;
}

//WAY2: define function inside useEffect & call it
const  useData = (url)=> {
    const [data, setData] = useState(null);

    useEffect(() => {
      let ignore = false;

      const getCall = async (url)=>{
        //TO-DO: you can set loading=true state here
        try{
            const {data} = await backendServer.get(url);

            if(!ignore)
            {
                setData(data);
            }    
                
        }catch(e){

            //TO-DO: you can set error state here
        }
        finally{
        //TO-DO: you can set loading=false here
        }
      }

      getCall(url); //DO async function call here

      return () => {
        ignore = true;
      };
    }, [url]);

    return data;
    //IMPORTANT: you can return loading, error also by using extra usestate
}


export default useData;