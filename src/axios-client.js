import axios from "axios";

const axiosClient = axios.create({
    baseURL: `${process.env.REACT_APP_LARA_API_URL}/`
})

axiosClient.interceptors.request.use((config) => {
    const token = localStorage.getItem('ACCESS_TOKEN')
    config.headers.Authorization = `Bearer ${token}`
    return config
})


axiosClient.interceptors.response.use((response)=> {
    return response;
}, (error) => {
    const {response} = error;
    // debugger;
    if (response.status == 401) {
        localStorage.removeItem('ACCESS_TOKEN')
    }

    throw error;
})
export default axiosClient;