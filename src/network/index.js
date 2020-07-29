import http from './http'

// 注册
export const reqRegister = params => {
  return http.post('/register', params)
}
// 登录

export const reqLogin = params => {
  return http.post('/login', params)
}

export const reqUserInfo = id => {
  return http.get('/user/' + id)
}

// 图片上传
export const reqUpload = (file) => {
  return http.post('/upload', file)
}
// 更新信息
export const reqUpdate = (id, params) => {
  return http.post('/update/' + id, params)
}

// 获取分类
export const reqCategories = () => {
  return http.get('/category')
}
// 获取文章
export const reqDetail = (id, params) => {
  return http.get('/detail/' + id, {params})
}