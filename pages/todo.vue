<template lang="pug">
  div
    h1 hola todo
    v-list
      v-subheader OBTENER v-data
      v-item-group
        v-list-item(v-for="item  in todoos " :key="item.id")
          v-list-item-content
            v-list-item-title {{ item.title }}
          v-list-item-content
            v-list-item-subtitle {{ item.description }}

</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data: () => ({
    list: [{ title: "hola", descri: " hola" }, {title : "hola", descri: " hola"}]
  }),
  computed: {
    ...mapGetters({
      todoos: 'todo/obtodo'
    })
  }
}
</script>

<style>

</style>