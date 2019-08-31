import { setAuthInHeader } from '../api'

const mutations = {
  LOGIN (state, token) {
    if (!token) return
    state.token = token
    localStorage.setItem('token', token)
    setAuthInHeader(token)
  },
  LOGOUT (state) {
    state.token = null
    delete localStorage.token
    setAuthInHeader(null)
  },
  SET_IS_ADD_BOARD (state, toggle) {
    state.isAddBoard = toggle
  },
  SET_BOARDS (state, boards) {
    state.boards = boards
  },
  SET_BOARD (state, board) {
    state.board = board
  },
  SET_IS_CARD (state, toggle) {
    state.isCard = toggle
  },
  SET_CARD (state, card) {
    state.card = card
  },
  SET_THEME (state, color) {
    state.bodyColor = color || '#ffffff'
    state.navBarColor = color ? 'rgba(0,0,0,.15)' : '#1976d2'
  },
  SET_IS_SHOW_BOARD_SETTINGS (state, toggle) {
    state.isShowBoardSettings = toggle
  }
}

export default mutations
