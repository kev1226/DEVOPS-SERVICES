import {axiosLogin,axiosRegister, axiosToken} from './axios'

export const registeRequest = (user) => axiosRegister.post(`/register` , user);

export const loginRequest = user => axiosLogin.post(`/login` , user);

export const verifyTokenRequest = () => axiosToken.get('/verify')