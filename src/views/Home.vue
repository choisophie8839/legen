<template>
  <v-container>
    Home
    <v-layout>
      <div>
        Board List :
        <v-layout v-if="loading">
          Board List Loading...
        </v-layout>
        <v-layout v-else>
          <div v-for="b in boards" :key="b.id">
            {{b}}
          </div>
        </v-layout>
      </div>
    </v-layout>
  </v-container>
</template>

<script>
import { board } from '../api'
export default {
  data () {
    return {
      loading: false,
      boards: []
    }
  },
  created () {
    this.fetchData()
  },
  methods: {
    fetchData () {
      board.fetch()
        .then(data => {
          this.boards = data
        })
        .finally(_ => {
          this.loading = false
        })
    }
  }
}
</script>
