import { useCallback, useState } from "react"
import { useDispatch } from "../../hooks-store/store";

//a Compopnent that start with 'use' can use other Hooks.
const useHttp = () =>{
    const [err, setError] = useState(null); 
    const dispatch = useDispatch();
    const sendRequest = useCallback(async(requestConfig,applyData)=>{
        dispatch('SET_LOADING',true);

        try{
            const resposne = await axios.request({                
                methode:requestConfig.methode ? requestConfig.methode : 'GET',
                url : requestConfig.url,
                headers:requestConfig.headers ? requestConfig.headers: {},
                body: requestConfig.body ? requestConfig.body : null
            });

            console.log('resposne is: ',resposne.data);

            
        }catch(e){
            setError(e);
        }

        dispatch('SET_LOADING',false);
    },[])

    //hook returing some state
    return {
        err
        ,sendRequest
    }

}

// export default useHttp;//NOTE: WILL not use this , as we will be using axios + axios interceptor