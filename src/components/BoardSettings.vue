<template>
  <div class="sideBar" v-if="isShowBoardSettings">
    <v-card
      class="mx-auto"
    >
      <v-card-title>
        Menu
        <v-icon right @click.prevent="onClose">mdi-close</v-icon>
      </v-card-title>
      <v-card-text><a @click.prevent="onDeleteBoard">Delete Board</a></v-card-text>
    </v-card>
  </div>
</template>

<script>
import { mapMutations, mapState, mapActions } from 'vuex'
export default {
  name: 'BoardSettings',
  computed: {
    ...mapState([
      'isShowBoardSettings',
      'board'
    ])
  },
  methods: {
    ...mapMutations([
      'SET_IS_SHOW_BOARD_SETTINGS'
    ]),
    ...mapActions([
      'DELETE_BOARD'
    ]),
    onClose () {
      this.SET_IS_SHOW_BOARD_SETTINGS(false)
    },
    onDeleteBoard () {
      if (!window.confirm(`Delete ${this.board.title} Board?`)) return
      this.DELETE_BOARD({ id: this.board.id })
        .then(() => this.SET_IS_SHOW_BOARD_SETTINGS(false))
        .then(() => this.$router.push('/'))
    }
  }
}
</script>

<style scoped>
</style>
