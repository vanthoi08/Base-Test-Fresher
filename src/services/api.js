import axios from "../utils/axios-customize";


const callRegister = (fullName, email, password, phone)=>{
const URL_BACKEND = "/api/v1/user/register";
 const data = {
    fullName:fullName,
    email:email,
    password:password,
    phone:phone
             }
    return axios.post(URL_BACKEND,data);
}

const callLogin = (username, password, delay) =>{
    const URL_BACKEND = "/api/v1/auth/login";
    const data = {
        username:username,
        password:password,
        delay: delay
                 }
        return axios.post(URL_BACKEND,data,5000);
    }

 export {callRegister,callLogin}
