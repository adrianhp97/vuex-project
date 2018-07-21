import CONSTANTS from './constants'

const mutations = {
  [CONSTANTS.UPLOADING] (state) {
    state.uploading = true
  },
  [CONSTANTS.UPLOADED] (state) {
    state.uploading = false
  },
  [CONSTANTS.LOADING] (state) {
    state.loading = true
  },
  [CONSTANTS.LOADED] (state) {
    state.loading = false
  },
  [CONSTANTS.DELETING] (state) {
    state.deleting = true
  },
  [CONSTANTS.DELETED] (state) {
    state.deleting = false
  },
  [CONSTANTS.UPDATING] (state) {
    state.updating = true
  },
  [CONSTANTS.UPDATED] (state) {
    state.updating = false
  },
  [CONSTANTS.CREATING] (state) {
    state.creating = true
  },
  [CONSTANTS.CREATED] (state) {
    state.creating = false
  }
}

export default mutations
