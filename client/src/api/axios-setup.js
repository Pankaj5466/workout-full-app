//axios is simple & easy to use
//complete guide: https://axios-http.com/
import axios from 'axios';
//(a) Setup Axios Instance 
const backendServer = axios.create({
    timeout:1,
    headers:{'X-Custom-Header':'foobar'}
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

        console.log(error.message);
        return Promise.reject(error);
    }
    )

//resposne Schema: https://axios-http.com/docs/res_schema
backendServer.interceptors.response.use(
    (response)=>{
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        console.log(response.data);

        return response;
    },
    (error)=>{
        //Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        console.log(error.message);
        return Promise.reject(error);
    })

export default backendServer;