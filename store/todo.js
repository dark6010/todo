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
  },
  todoAdd(state, data) {
    state.todos.push(data)
  },
  delTodo(state, item) {
    state.todos = state.todos.filter(t => t._id !== item._id)
  },
  at(state, item) {
    const index = state.todos.findIndex(t => t._id === item._id)
    if(index !== -1){
      state.todos.splice(index, 1, item)
    }
  }
}
export const actions = {
  async loadTodo({ commit }) {
    const { data } = await this.$axios.get('http://localhost:3000/api')
    commit('setTodo', data)
  },
  async addtodo ({ commit }, todo) {
    try {
      const { data } = await this.$axios.post('http://localhost:3000/api', todo)
      console.log(1, data)
      commit('todoAdd', data)
    } catch (error) {
      console.error(error)
    }
  },
  async deleteTodo({ commit }, item) {
    try {
      await this.$axios.delete(`http://localhost:3000/api/${item._id}`)
      commit('delTodo',item)
    } catch (error) {
      console.error(error)
    }
  },
  async actu({ commit }, item) {
    try {
      const res = await this.$axios.put('http://localhost:3000/api/'+ item._id, item)
      commit('at', res.data)
    } catch (error) {
      console.error(error)
    }
  }
}
