<template>
  <v-dialog v-model="isAddBoard" persistent max-width="600px">
    <v-card>
      <v-card-title>
        <span class="headline">Create new board</span>
      </v-card-title>
      <v-card-text>
        <v-form>
          <v-text-field label="Board name" required v-model="boardName" ref="input" autofocus></v-text-field>
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-btn color="success" @click="SET_IS_ADD_BOARD(false)">close</v-btn>
        <v-spacer></v-spacer>
        <v-btn color="info" @click.prevent="addBoard" :disabled="valid">save</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'
export default {
  name: 'AddBoard',
  data () {
    return {
      boardName: '',
      valid: true
    }
  },
  computed: {
    ...mapState([
      'isAddBoard'
    ])
  },
  watch: {
    boardName (val) {
      this.valid = val.trim().length <= 0
    }
  },
  methods: {
    ...mapMutations([
      'SET_IS_ADD_BOARD'
    ]),
    ...mapActions([
      'ADD_BOARD',
      'FETCH_BOARDS'
    ]),
    addBoard () {
      this.SET_IS_ADD_BOARD(false)
      this.ADD_BOARD({ title: this.boardName })
        .then(({ id }) => {
          this.$router.push(`/board/${id}`)
        })
    }
  }
}
</script>

<style scoped>

</style>
