export const state = () => ({
  menu: false,
  modal: {
    active: false,
    content: null,
  },
})

export const getters = {
  menu: (state) => state.menu,
  modal: (state) => state.modal,
}

export const mutations = {
  TOGGLE_MENU(state) {
    state.menu = !state.menu
  },
  CLOSE_MENU(state) {
    state.menu = false
  },
  OPEN_MODAL(state, payload) {
    state.modal.active = true
    state.modal.content = payload
  },
  CLOSE_MODAL(state) {
    state.modal.active = false
    state.modal.content = null
  },
}

export const actions = {
  toggleMenu({ commit }) {
    document.body.classList.toggle('overflow-hidden')
    commit('TOGGLE_MENU')
  },

  closeMenu({ commit }) {
    document.body.classList.remove('overflow-hidden')
    commit('CLOSE_MENU')
  },

  openModal({ commit }, payload) {
    document.body.classList.add('overflow-hidden')
    commit('OPEN_MODAL', payload)
  },

  closeModal({ commit }) {
    document.body.classList.remove('overflow-hidden')
    commit('CLOSE_MODAL')
  },
}
