import axios from "axios";

export const axiosLogin = axios.create({
    baseURL: 'http://localhost:4002/api',
    withCredentials:true
})

export const axiosRegister = axios.create({
    baseURL: 'http://localhost:4000/api',
    withCredentials:true
})
export const axiosToken = axios.create({
    baseURL: 'http://localhost:4001/api',
    withCredentials:true
})