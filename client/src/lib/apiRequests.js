import axios from "axios";

const apiRequest = axios.create({
    baseURL:"https://easycar-backend.vercel.app:8800/api",
    withCredentials:true,
})

export default apiRequest;
