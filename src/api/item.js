import request from '../http/http'


export function createItem(data) {
  return request({
    url:'/todoapp',
    method: 'post',
    data
  })
}

export function deleteItem(id) {
  return request({
    url:'/todoapp/' + id,
    method: 'delete',
  })
}

export function updateItem(id,data) {
  return request({
    url:'/todoapp/' + id,
    method: 'put',
    data
  })
}

export function getAllItem() {
  return request({
    url:'/todoapp',
    method: 'get'
  })
}

export function getItemById(id) {
  return request({
    url:'/todoapp/' + id,
    method: 'get'
  })
}
