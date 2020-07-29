import axios from 'axios'

const http = axios.create({
  baseURL: 'http://112.74.99.5:3000/web/api'
})
http.interceptors.request.use(config => {
  if (localStorage.token) {
    config.headers.Authorization = 'Bearer ' + localStorage.token
  }
  return config
})
export default http