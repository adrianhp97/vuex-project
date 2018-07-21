import Api from '../../api/Api'
import CONSTANTS from '../constants'

export default {
  namespaced: true,
  state: {
    detailData: null
  },
  mutations: {
    [CONSTANTS.SET_DETAIL_DATA] (state, data) {
      state.detailData = data
    }
  },
  actions: {
    all ({commit}, params) {
      return Api.photo.all()
        .then((data) => {
          return data
        })
    },
    get ({commit}, params) {
      return Api.photo.get(params)
        .then((data) => {
          return data
        })
    },
    create ({commit}, data) {
      return Api.photo.create(data)
        .then((data) => {
          return data
        })
    },
    remove ({commit, dispatch}, id) {
      return Api.photo.remove(id)
        .then((data) => {
          return data
        })
    },
    update ({commit}, data) {
      return Api.photo.update(data.id, data)
        .then((data) => {
          return data
        })
    },
    detail ({commit}, id) {
      return Api.photo.detail(id)
        .then((data) => {
          return data
        })
    },
    setDetailData ({commit}, value) {
      commit(CONSTANTS.SET_DETAIL_DATA, value)
    }
  },
  getters: {
    getDetailData: state => {
      return state.detailData
    }
  }
}
