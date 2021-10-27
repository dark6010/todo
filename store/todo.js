// import axios from 'axios'
export const state = () => ({
  todos: []
})
export const getters = {
  obtodo(state) {
    return state.todos
  }
}
export const mutations = {
  setTodo(state, todoss) {
    state.todos = todoss
  },
  todoAdd(state, data) {
    state.todos.push(data)
  },
  delTodo(state, data) {
    let index = state.todos.findIndex(item => item._id === data._id)
    state.todos.splice(index, 1)
  },
  actu(state, data) {
    let op = state.todos.find(item => item._id === data._id)
    console.log(4, op)
  }
}
export const actions = {
  async loadTodos({ commit }) {
    let { data } = await this.$axios.get('http://localhost:3000/api')
    console.log(data);
    commit('setTodo', data)
  },
  async addTodo({ commit }, todo) {
    try {
      console.log(32, todo);
      const { data } = await this.$axios.post('http://localhost:3000/api', todo)
      console.log(33, data)
      commit('todoAdd', data)
    } catch (error) {
      console.error(error)
    }
  },
  async deleteTodo({ commit }, id) {
    try {
      const { res } = await this.$axios.delete( `http://localhost:3000/api/${id}`)
      console.log(res)
      commit('delTodo', res)
    } catch (error) {
      console.error(error)
    }
  },
  async editarItem({commit}, item) {
    try {
      const res = await this.$axios.put('http://localhost:3000/api/'+ item._id, item)
      console.log(3, res)
      commit('actu', res.data)
    } catch (error) {
      console.error(error)
    }
  }
}
