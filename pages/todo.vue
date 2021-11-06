<template lang="pug">
  div
    h1 hola todo
    //- //Agregar todo
    v-form(@submit.prevent="adtd(todo)")
      v-text-field(v-model="todo.title")
      v-text-field(v-model="todo.description")
      v-btn( type="submit"  color="success") ADD-TD
    v-list
      v-subheader OBTENER v-data
      v-item-group
        v-list-item(v-for="item  in todoos " :key="item.id")
          v-list-item-content
            v-list-item-title {{ item.title }}
          v-list-item-content
            v-list-item-subtitle {{ item.description }}
          v-list-item-content
            v-list-item-subtitle {{ item._id }}
          v-icon(@click.prevent="editItem(item)" color="green" icon).mr-4 mdi-pencil
          v-icon(@click.prevent="delto(item)" color="red" icon) mdi-delete
    v-dialog( v-model="dialog")
      template(v-slot:activator ="{ on, attrs }")
      v-card
        v-card-title edit todo
          v-text-field(v-model="todoEdit.title")
          v-text-field(v-model="todoEdit.description")
          v-card-actions
            v-btn(@click="salvar()" color="primary") guardar
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  data: () => ({
    list: [{ title: "hola", descri: " hola" }, {title : "hola", descri: " hola"}],
    todo: {},
    dialog : false,
    todoEdit: {}
  }),
  computed: {
    ...mapGetters({
      todoos: 'todo/obtodo'
    })
  },
  methods: {
    ...mapActions({
      adtd: 'todo/addtodo',
      delto:'todo/deleteTodo',
      save: 'todo/actu'
    }),
    salvar () {
      this.save(this.todoEdit)
      this.dialog = false
    },
    editItem(item) {
      this.todoEdit = {...item}
      this.dialog = true
    }
  }
}
</script>

<style>

</style>