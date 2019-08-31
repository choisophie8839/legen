<template>
  <v-card-text>
    <router-link @click.native="SET_IS_CARD(true)" :to="`/board/${boardId}/card/${data.id}`">
      {{data.title}}
    </router-link>
    <v-icon right @click.prevent="onDelete">mdi-close</v-icon>
  </v-card-text>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'
export default {
  name: 'CardItem',
  props: [
    'data'
  ],
  computed: {
    ...mapState({
      boardId: state => state.board.id
    })
  },
  methods: {
    ...mapMutations([
      'SET_IS_CARD',
    ]),
    ...mapActions([
      'DELETE_CARD'
    ]),
    onDelete () {
      if (!window.confirm('Delete this card')) return
      this.DELETE_CARD({ id: this.data.id })
    }
  }
}
</script>

<style scoped>

</style>
