import axios from 'axios'
import { ElMessage } from 'element-plus'

const request = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 10000
})

request.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token')

    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }

    return config
  },
  (error) => Promise.reject(error)
)

request.interceptors.response.use(
  (response) => {
    const result = response.data

    // 这里暂时兼容直接返回数据的接口。
    // 等后端统一响应格式后再改成严格判断 result.code。
    if (
      result &&
      typeof result === 'object' &&
      'code' in result
    ) {
      if (result.code === 200 || result.code === 0) {
        return result.data
      }

      ElMessage.error(result.message || result.msg || '请求失败')
      return Promise.reject(
        new Error(result.message || result.msg || '请求失败')
      )
    }

    return result
  },
  (error) => {
    const status = error.response?.status

    if (status === 401) {
      localStorage.removeItem('token')
      ElMessage.error('登录状态已失效，请重新登录')
      window.location.href = '/login'
    } else if (status === 403) {
      ElMessage.error('没有操作权限')
    } else {
      ElMessage.error(
        error.response?.data?.message ||
          error.message ||
          '网络请求失败'
      )
    }

    return Promise.reject(error)
  }
)

export default request