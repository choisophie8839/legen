<template>
  <v-content>
    <v-layout row>
      <v-flex xs2 sm2 v-for="b in boards" :key="b.id" class="pb-5 ma-5">
        <v-card :color="b.bgColor" :to="`/board/${b.id}`">
          <v-card-title ref="boardItem" style="height: 100px">{{b.title}}</v-card-title>
        </v-card>
      </v-flex>
      <v-flex xs2 sm2 class="pb-5 ma-5">
        <v-card @click.prevent="SET_IS_ADD_BOARD(true)">
          <v-card-title style="height: 100px">Create New Board...</v-card-title>
        </v-card>
      </v-flex>
    </v-layout>
    <AddBoard></AddBoard>
  </v-content>
</template>

<script>
import AddBoard from '../components/AddBoard'
import { mapState, mapMutations, mapActions } from 'vuex'

export default {
  components: { AddBoard },
  data () {
    return {
      loading: false,
      error: ''
    }
  },
  computed: {
    ...mapState([
      'isAddBoard', 'boards'
    ])
  },
  created () {
    this.fetchData()
    this.SET_THEME()
  },
  methods: {
    ...mapMutations([
      'SET_IS_ADD_BOARD',
      'SET_THEME'
    ]),
    ...mapActions([
      'FETCH_BOARDS'
    ]),
    fetchData () {
      this.loading = true
      this.FETCH_BOARDS().finally(_ => {
        this.loading = false
      })
    }
  }
}
</script>
