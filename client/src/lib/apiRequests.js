import axios from "axios";

const apiRequest = axios.create({
    baseURL:"https://easycar-backend.vercel.app:80/api",
    withCredentials:true,
})

export default apiRequest;
