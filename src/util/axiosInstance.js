import axios from 'axios'
import jwt_decode from "jwt-decode";
import dayjs from 'dayjs'


const baseURL = 'http://localhost:8080/'


let authTokens = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null

const axiosInstance = axios.create({
    baseURL,
    headers:{Authorization: `Bearer ${authTokens}`}
});

axiosInstance.interceptors.request.use(async req => {
    if(!authTokens){
        authTokens = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null
        req.headers.Authorization = `Bearer ${authTokens}`
    }

    console.log(authTokens)
    const user = jwt_decode(authTokens.access)
    const isExpired = dayjs.unix(user.exp).diff(dayjs()) < 1;

    if(!isExpired) {
        console.log("Not expired")
        return req
    }
    else {
        console.log("Expired")
        // eslint-disable-next-line no-restricted-globals
        history.push("/login")
    }
    //
    // const response = await axios.post(`${baseURL}/api/token/refresh/`, {
    //     refresh: authTokens.refresh
    // });
    //
    // localStorage.setItem('authTokens', JSON.stringify(response.data))
    // req.headers.Authorization = `Bearer ${response.data.access}`
    return req
})


export default axiosInstance;