import axios from 'axios'

axios.defaults.baseURL = Endpoint.baseUrl
axios.defaults.headers.post['Content-Type'] = 'application/json'

export default {
  album: {
    all () {
      return axios.get(Endpoint.album.all())
    },
    get (params) {
      return axios.get(Endpoint.album.get(params))
    },
    detail (id) {
      return axios.get(Endpoint.album.detail(id))
    },
    create (data) {
      return axios.post(Endpoint.album.create(), data)
    },
    update (id, data) {
      return axios.put(Endpoint.album.update(id), data)
    },
    delete (id) {
      return axios.delete(Endpoint.album.delete(id))
    }
  },
  comment: {
    all () {
      return axios.get(Endpoint.comment.all())
    },
    get (params) {
      return axios.get(Endpoint.comment.get(params))
    },
    detail (id) {
      return axios.get(Endpoint.comment.detail(id))
    },
    create (data) {
      return axios.post(Endpoint.comment.create(), data)
    },
    update (id, data) {
      return axios.put(Endpoint.comment.update(id), data)
    },
    delete (id) {
      return axios.delete(Endpoint.comment.delete(id))
    }
  },
  photo: {
    all () {
      return axios.get(Endpoint.photo.all())
    },
    get (params) {
      return axios.get(Endpoint.photo.get(params))
    },
    detail (id) {
      return axios.get(Endpoint.photo.detail(id))
    },
    create (data) {
      return axios.post(Endpoint.photo.create(), data)
    },
    update (id, data) {
      return axios.put(Endpoint.photo.update(id), data)
    },
    delete (id) {
      return axios.delete(Endpoint.photo.delete(id))
    }
  },
  post: {
    all () {
      return axios.get(Endpoint.post.all())
    },
    get (params) {
      return axios.get(Endpoint.post.get(params))
    },
    detail (id) {
      return axios.get(Endpoint.post.detail(id))
    },
    create (data) {
      return axios.post(Endpoint.post.create(), data)
    },
    update (id, data) {
      return axios.put(Endpoint.post.update(id), data)
    },
    delete (id) {
      return axios.delete(Endpoint.post.delete(id))
    }
  },
  user: {
    all () {
      return axios.get(Endpoint.user.all())
    },
    get (params) {
      return axios.get(Endpoint.user.get(params))
    },
    detail (id) {
      return axios.get(Endpoint.user.detail(id))
    },
    create (data) {
      return axios.post(Endpoint.user.create(), data)
    },
    update (id, data) {
      return axios.put(Endpoint.user.update(id), data)
    },
    delete (id) {
      return axios.delete(Endpoint.user.delete(id))
    }
  }
}
