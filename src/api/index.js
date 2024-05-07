import request from '@/utils/request'

export const registerAPI = (data) => {
  return request({
    url: '/api/reg',
    method: 'POST',
    data
  })
}
