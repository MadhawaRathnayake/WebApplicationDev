import axios from "axios";

const apiRequest = axios.create({
    baseURL:"https://easycar-backend.vercel.app/api",
    withCredentials:true,
})

export default apiRequest;
