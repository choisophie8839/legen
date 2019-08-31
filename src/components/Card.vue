<template>
  <v-dialog v-model="isCard" persistent max-width="600px">
    <v-card>
      <v-card-title>
        <v-text-field
          class="headline"
          type="text"
          v-model="card.title"
          :readonly="!toggleTitle"
          @click="toggleTitle=true"
          @blur="onBlurTitle"
          ref="inputTitle"
        ></v-text-field>
        <v-icon @click.prevent="onClose">mdi-close</v-icon>
      </v-card-title>
      <v-card-text>
        <v-textarea
          :readonly="!toggleDesc"
          label="Description"
          @click="toggleDesc=true"
          @blur="onBlurDesc"
          ref="inputDesc"
          v-model="card.description">
        </v-textarea>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex'
export default {
  name: 'Card',
  data () {
    return {
      toggleTitle: false,
      toggleDesc: false
    }
  },
  computed: {
    ...mapState([
      'isCard',
      'card',
      'board'
    ])
  },
  created () {
    this.fetchCard()
  },
  methods: {
    ...mapActions([
      'FETCH_CARD',
      'UPDATE_CARD'
    ]),
    ...mapMutations([
      'SET_IS_CARD'
    ]),
    onClose () {
      this.SET_IS_CARD(false)
      this.$router.push(`/board/${this.board.id}`)
    },
    fetchCard () {
      const id = this.$route.params.cid
      this.FETCH_CARD({ id })
    },
    onBlurTitle () {
      this.toggleTitle = false
      const title = this.$refs.inputTitle.value.trim()
      if (!title) return
      this.UPDATE_CARD({ id: this.card.id, title })
        .then(() => this.fetchCard())
    },
    onBlurDesc () {
      this.toggleDesc = false
      const description = this.$refs.inputDesc.value.trim()
      if (!description) return
      this.UPDATE_CARD({ id: this.card.id, description })
        .then(() => this.fetchCard())
    }
  }
}
</script>

<style scoped>

</style>
