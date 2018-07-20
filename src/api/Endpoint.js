import config from '../config'

export function buildQuery (params = {}) {
  const parameters = {}
  const queries = params || {}
  const esc = encodeURIComponent
  const obj = Object.assign({}, parameters, queries)
  return '?' + Object.keys(obj)
    .map(k => esc(k) + '=' + esc(obj[k]))
    .join('&')
}

export default {
  baseUrl: config.apiUrl,
  album: {
    all () {
      return 'albums'
    },
    get (params) {
      return 'albums' + buildQuery(params)
    },
    detail (id) {
      return 'albums/' + id
    },
    create () {
      return 'albums'
    },
    update (id) {
      return 'albums/' + id
    },
    delete (id) {
      return 'albums/' + id
    }
  },
  comment: {
    all () {
      return 'comments'
    },
    get (params) {
      return 'comments' + buildQuery(params)
    },
    detail (id) {
      return 'comments/' + id
    },
    create () {
      return 'comments'
    },
    update (id) {
      return 'comments/' + id
    },
    delete (id) {
      return 'comments/' + id
    }
  },
  photo: {
    all () {
      return 'photos'
    },
    get (params) {
      return 'photos' + buildQuery(params)
    },
    detail (id) {
      return 'photos/' + id
    },
    create () {
      return 'photos'
    },
    update (id) {
      return 'photos/' + id
    },
    delete (id) {
      return 'photos/' + id
    }
  },
  post: {
    all () {
      return 'post'
    },
    get (params) {
      return 'post' + buildQuery(params)
    },
    detail (id) {
      return 'post/' + id
    },
    create () {
      return 'posts'
    },
    update (id) {
      return 'post/' + id
    },
    delete (id) {
      return 'posts/' + id
    }
  },
  user: {
    all () {
      return 'users'
    },
    get (params) {
      return 'users' + buildQuery(params)
    },
    detail (id) {
      return 'users/' + id
    },
    create () {
      return 'users'
    },
    update (id) {
      return 'users/' + id
    },
    delete (id) {
      return 'users/' + id
    }
  }
}
