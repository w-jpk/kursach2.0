import axios from 'axios'

const PORT = process.env.PORT || 5000

const instance = axios.create({
    baseURL: `http://localhost:${PORT}/api`,
})

instance.interceptors.request.use((config) => {
    config.headers.Authorization = window.localStorage.getItem('token')

    return config
})

export default instance
