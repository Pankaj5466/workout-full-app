//axios is simple & easy to use
//complete guide: https://axios-http.com/
import axios from 'axios';
//(a) Setup Axios Instance 
const backendServer = axios.create({
    baseURL:'http://localhost:8080/mock', //TO-DO: update this mock variable using environment variable later
    timeout:10000,
})

//(b) Setup Interceptor

// axios.request(config) -> map to below interceptr -> OUT call to internet
// request config strucutre: https://axios-http.com/docs/req_config
backendServer.interceptors.request.use(
    (config)=>{
        //Do something before request sending (ex: logging)
        return config;
    },
    (error)=>{
        //Do something with request error

        console.log("Error in config",error.message);
        // return Promise.reject(error); //IMP: we should not do this, as axios also reject a promise in the
    }
    )

//resposne Schema: https://axios-http.com/docs/res_schema
backendServer.interceptors.response.use(
    (response)=>{
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        // console.log(response.data);

        return response;
    },
    (error)=>{
        //Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        console.error("Error Message::" ,error.message);

        if(error.response)
        {
            const e = error;
            //server return some response
            console.log(`${e.response.statusText}(${e.response.status}) : ${e.response.data}`);
            return Promise.reject(error.response);
        }
        else{
            // console.log('Request Not returned by server'); 
            return Promise.reject('client side error',error);
        }
    })

export default backendServer;