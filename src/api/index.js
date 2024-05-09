import request from '@/utils/request'

export const registerAPI = (data) => {
  return request({
    url: '/api/reg',
    method: 'POST',
    data
  })
}

export const loginAPI = ({ username, password }) => {
  return request({
    url: '/api/login',
    method: 'POST',
    data: {
      username,
      password
    }
  })
}
