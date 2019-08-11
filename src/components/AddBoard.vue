<template>
  <v-dialog v-model="dialog">
    <v-card>
      <v-card-title>
        <span class="headline">Create new board</span>
      </v-card-title>
      <v-card-text>
        <v-form>
          <v-text-field label="Board name" required v-model="boardName" ref="input"></v-text-field>
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-btn color="success" @click="close()">close</v-btn>
        <v-spacer></v-spacer>
        <v-btn color="info" @click.prevent="addBoard">save</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: 'AddBoard',
  data () {
    return {
      dialog: true,
      boardName: ''
    }
  },
  mounted () {
    this.$refs.input.focus()
  },
  methods: {
    close () {
      this.$emit('close')
    },
    addBoard () {
      this.$emit('close')
      this.$emit('submit', this.boardName)
    }
  }
}
</script>

<style scoped>

</style>
