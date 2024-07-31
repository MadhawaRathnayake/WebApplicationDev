import axios from "axios";

const apiRequest = axios.create({
    baseURL:"https://webapplicationdev.onrender.com",
    withCredentials:true,
})

export default apiRequest;
