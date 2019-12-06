import axios from 'axios'
// 设置超时
axios.defaults.timeout = 10000;
// 设置请求头
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
// 请求拦截
// 响应拦截
// axios.interceptors.response.use(
//   response => {
//     if (response.status == 200) {
//       return Promise.resolve(response)
//     } else {
//       return Promise.resolve(response)
//     }
//   },
//   error => {
//     if (error.response.status) {
//       switch (error.response.status) {
//         //401--未登录
//         case 401:
//           router.replace({
//             path: '/login',
//             query: {
//               redirect: router.currentRoute.fullPath
//             }
//           })
//           break;
//           //token过期
//         case 403:
//           this.$message('登录信息过期，请重新登录')
//           // 清除token
//           localStorage.removeItem('token');
//           store.commit('loginSuccess', null);
//           // 跳转登录页面，并将要浏览的页面fullPath传过去，登录成功后跳转需要访问的页面 
//           setTimeout(() => {
//             router.replace({
//               path: '/login',
//               query: {
//                 redirect: router.currentRoute.fullPath
//               }
//             });
//           }, 1000);
//           break;
//           //404请求不存在
//         case 404:
//           Toast({
//             message: '网络请求不存在',
//             duration: 1500,
//             forbidClick: true
//           });
//           break;
//           // 其他错误，直接抛出错误提示
//         default:
//           Toast({
//             message: error.response.data.message,
//             duration: 1500,
//             forbidClick: true
//           });
//       }
//       return Promise.reject(error.response);
//     }
//   }
// )
export default {
    post(url, data) {
      return axios({
        method: 'post',
        baseURL: config.baseURL,
        url,
        data: data,
        timeout: config.timeout,
        headers: config.getHeaders()
      })
    },
    get (url, params) {
      return axios({
        method: 'get',
        baseURL: config.baseURL,
        url,
        params, // get 请求时带的参数
        timeout: config.timeout,
        headers: config.getHeaders()
      })
    },
    put (url,data){
      return axios({
        method: 'put',
        baseURL: config.baseURL,
        url,
        data: data,
        timeout: config.timeout,
        headers: config.getHeaders()
      })
    },
    patch (url,data) {
      return axios({
        method: 'patch',
        baseURL: config.baseURL,
        url,
        data: data,
        timeout: config.timeout,
        headers: config.getHeaders()
      })
    },
    delete(url,data){
      return axios({
        method: 'delete',
        baseURL: config.baseURL,
        data:data,
        url,
        timeout: config.timeout,
        headers: config.getHeaders()
      })
    },
    getData (url, params) {
      return axios({
        method: 'get',
        baseURL: config.baseURL,
        url,
        params, // get 请求时带的参数
        timeout: config.timeout,
        headers: config.getHeaders()
      })
    },
    post_callback (url, data) {
      return axios({
        method: 'post',
        baseURL: config.baseURL,
        url,
        data: data,
        timeout: config.timeout,
        headers: config.getHeaders()
      })
    },
  }
  
