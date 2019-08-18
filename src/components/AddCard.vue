<template>
  <form @submit.prevent="onSubmit">
    <v-text-field v-model="inputTitle" autofocus></v-text-field>
    <v-btn :disabled="invalidInput" type="submit">Add Card</v-btn>
    <v-icon @click="$emit('close')">mdi-close</v-icon>
  </form>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'AddCard',
  props: [
    'listId'
  ],
  data () {
    return {
      inputTitle: ''
    }
  },
  computed: {
    invalidInput () {
      return !this.inputTitle.trim()
    }
  },
  methods: {
    ...mapActions([
      'ADD_CARD'
    ]),
    onSubmit () {
      if (this.invalidInput) return
      const { inputTitle, listId } = this
      this.ADD_CARD({ title: inputTitle, listId })
      // eslint-disable-next-line no-return-assign
        .finally(() => this.inputTitle = '')
    }
  }
}
</script>

<style scoped>

</style>
