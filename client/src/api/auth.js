import {axiosLogin,axiosRegister} from './axios'

export const registeRequest = (user) => axiosRegister.post(`/register` , user);

export const loginRequest = user => axiosLogin.post(`/login` , user);
