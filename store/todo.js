export const state = () => ({
  todos: []
})
// mutaciones
export const getters = {
  obtodo(state) {
    return state.todos
  }
}
export const  mutations = {
  setTodo(state, todoss) {
    state.todos = todoss
  }
}
export const actions = {
  async loadTodo({ commit }) {
    const { data } = await this.$axios.get('http://localhost:3000/api')
    commit('setTodo', data)
  }
}