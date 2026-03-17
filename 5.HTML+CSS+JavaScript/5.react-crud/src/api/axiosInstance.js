import axios from 'axios';


const axiosInstance = axios.create({
    baseURL: 'https://d1kbgcxr8a6wc.cloudfront.net',
    timeout: 10000,
    headers: {
        'Content-type': 'application/json'
    }

})

export default axiosInstance;