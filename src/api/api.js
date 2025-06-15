//  apis 

import axios from "axios";

const axiosParams = {
    baseURL: process.env.NODE_ENV === "development" ? "http://localhost:8000" : "/"
}

const axiosInstance = axios.create(axiosParams)

const api = (axios) => {
    return {
        get: (url, config = {}) => axios.get(url, body, config),
        delete: (url, config = {}) => axios.get(url, body, config),
        post: (url, body, config = {}) => axios.post(url, body, config),
        patch: (url, body, config = {}) => axios.patch(url, body, config),
        put: (url, body, config = {}) => axios.put(url, body, config)
    }
}

export default api(axiosInstance)

//  userApi

