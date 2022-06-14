import axiosClient from "./axiosClient";


const loginApi =(data)=> {
    const url ='/auth/login';
    return axiosClient.post(url,data);
}

export default loginApi;