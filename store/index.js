 export const actions = {
  async nuxtServerInit({ dispatch }) {
    await dispatch('todo/loadTodo')
  }
}
