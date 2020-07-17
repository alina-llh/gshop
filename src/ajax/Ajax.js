import axios from "axios"
import NProgress from 'nprogress'
import "nprogress/nprogress.css"
const serevr = axios.create({
  baseURL: "/api",
  timeout: 20000
})
serevr.interceptors.request.use(config => {
  NProgress.start()
  return config;
});

serevr.interceptors.response.use(response => {
  NProgress.done()
  // console.log(response)
  return response.data;
}, error => {
  NProgress.done()
  return Promise.reject(error);
});
export default serevr