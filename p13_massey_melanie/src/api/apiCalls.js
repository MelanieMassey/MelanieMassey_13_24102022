import axios from "axios";

const apiURL = "http://localhost:3001/api/v1";


export function getToken(loginDetails) {
    return axios.post(apiURL+"/user/login", loginDetails)
    .then(response=>{
        return response.data.body.token
    })
}

export function getUserInfo(token) {
    return axios.post(apiURL+"/user/profile",{
        // Data : pas encore de données
    },{
        headers:{
            Authorization:`Bearer ${token}`
        }
    })
    .then(response=>{
        return response.data.body
    })
}