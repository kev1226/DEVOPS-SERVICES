import axios from 'axios'

const APIREGISTER = "http://localhost:4000/api"
const APILOGIN = "http://localhost:4002/api"


export const registeRequest = (user) => axios.post(`${APIREGISTER}/register` , user);

export const loginRequest = user => axios.post(`${APILOGIN}/login` , user);
