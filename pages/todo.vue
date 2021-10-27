<template lang="pug">
div
  h1 Esta es la ruta todo
  //- Agregar Todo
  v-form(@submit.prevent ="adtd(todo)")
    v-text-field(label="title" v-model="todo.title" )
    v-text-field(label="Description" v-model="todo.description" )
    v-btn(type="submit"  color="success") ADD TODO
  //- Obyener el listado de la base de datos
  v-card.mx-auto(max-width="300" title)
    v-list
      v-subheader TODOS
      v-list-item-group
        v-list-item(v-for="item in todoos" :key="item._id")
          v-list-item-content
            v-list-item-title {{ item.title }}
          v-list-item-content
            v-list-item-subtitle {{ item.description }}
          v-list-item-content
            v-list-item-subtitle {{ item._id }}
          //- Fruncion Editar todo
          v-icon(small @click="editItem(item)").mr-2 mdi-pencil
          //- Funcion eliminar todo
          v-icon(small @click.prevent="delto(item._id)") mdi-delete
  //- Apertura del Dialog o modal para la edición de una todo
  v-dialog( v-model="dialog" width="500" )
    template( v-slot:activator = "{on, attrs}" )
    v-card
      v-card-title Editar prueba 
        v-text-field(label="title" v-model="todoEdit.title" )
        v-text-field(label="Description" v-model="todoEdit.description" )
        v-card-actions
          v-btn(@click="salvar()" color="success") savesss
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  // created() {
  //   this.$store.dispatch('todo/loadTodos')
  // },
  data: () => ({
    todo: {},
    dialog: false,
    todoEdit: {},
    editedIndex: -1
  }),
  computed: {
    ...mapGetters({
      todoos: 'todo/obtodo'
    })
  },
  methods: {
    ...mapActions({
      adtd: 'todo/addTodo',
      delto: 'todo/deleteTodo',
      save: 'todo/editarItem'
    }),
    salvar() {
      console.log(555, this.todoEdit)
      this.save(this.todoEdit)
      this.dialog = false
    },
    editItem(item) {
      console.log(1, item.description)
      this.todoEdit= {...item}
      console.log(2, item._id)
      this.dialog = true
    }
  }
}
</script>
<style>
</style>
