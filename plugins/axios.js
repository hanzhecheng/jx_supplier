import Vue from 'vue'
import axios from 'axios';
const axiosIns = axios.create()
const vueapp=new Vue()
let cancel, promiseArr = {}
const prefix = "",
  suffix = ""
axiosIns.defaults.timeout = 600000
// 添加请求拦截器
axiosIns.interceptors.request.use(config => {
  // 在发送请求之前做些什么

  //发起请求时，取消掉当前正在进行的相同请求
  if (promiseArr[config.url]) {
    promiseArr[config.url]('操作取消')
    promiseArr[config.url] = cancel
  } else {
    promiseArr[config.url] = cancel
  }
  //get请求增加时间戳 避免ie下get请求缓存
  config.url = prefix + config.url + suffix + (config.method == 'get' ? ("?t=" + (+new Date())) : "")
  return config
}, error => {
  // 请求错误
  return Promise.reject(error)
})

axiosIns.interceptors.response.use(response => {
  // 对响应数据做些事
  return response
}, error => {
  // 请求错误时做些事
  if (error && error.response) {
    switch (error.response.status) {
      case 400:
        error.message = '错误请求'
        break;
      case 401:
        error.message = '未授权，请重新登录'
        break;
      case 403:
        error.message = '拒绝访问'
        break;
      case 404:
        error.message = '请求错误,未找到该资源'
        break;
      case 405:
        error.message = '请求方法未允许'
        break;
      case 408:
        error.message = '请求超时'
        break;
      case 500:
        error.message = '服务器端出错'
        break;
      case 501:
        error.message = '网络未实现'
        break;
      case 502:
        error.message = '网络错误'
        break;
      case 503:
        error.message = '服务不可用'
        break;
      case 504:
        error.message = '网络超时'
        break;
      case 505:
        error.message = 'http版本不支持该请求'
        break;
      default:
        error.message = `连接错误${error.response.status}`
    }
  } else {
    error.message = "连接到服务器失败"
  }

  vueapp.$notify({
    title: '温馨提示',
    message: error.message,
    position: 'top-right'
  })

  return Promise.reject(error)
})

const ajaxMethod = ['get', 'post']
const ajax = {}

ajaxMethod.forEach((method) => {
  ajax[method] = function (url, data, config) {
    return new Promise(function (resolve, reject) {

      axiosIns[method](url, data, config).then(response => {
        if (response.data.code === '0') {
          resolve(response.data);
        } else {
            vueapp.$notify({
            title: '温馨提示',
            message: response.data.message,
            position: 'top-right'
          });
          if (response.data.code === '1006' && vueapp.$route.path != '/login') {
            vueapp.$router.replace('/login');
          }
          reject(response)
        }
      }).catch(error => {})
    })
  }
})

Vue.prototype.$ajax=ajax
