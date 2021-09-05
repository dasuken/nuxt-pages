export const state = () => ({
  page: 0,
})

export const actions = {}

export const mutations = {
  incrementPage(state) {
    state.page++
  },
  decrementPage(state) {
    state.page--
  },
  setCurrentPage(state, count) {
    state.page = count
  },
}

export const getters = {
  getCurrentPage(state) {
    return state.page
  },
}
