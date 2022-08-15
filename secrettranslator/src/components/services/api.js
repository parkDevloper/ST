import axios from "axios";
const URL = 'http://127.0.0.1:8000';

export const loginApi =async(user)=>{
    return await axios.post(`${URL}/api/user`,user);
}

export const getUser = async() =>{
    return await axios.get(`${URL}/api/list`);
}

export const uploadFile = async(data,config)=>{
    return await axios.post(`${URL}/api/upload`,data,config)
}