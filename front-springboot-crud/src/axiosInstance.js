import axios from 'axios';


const axiosInstance = axios.create({
    baseURL :  "http://localhost:8085/candidats/api/"
}); 

export default axiosInstance