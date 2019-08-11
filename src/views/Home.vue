<template>
  <v-content>
    <v-layout row>
      <v-flex xs2 sm2 v-for="b in boards" :key="b.id" class="pb-5 ma-5">
        <v-card :color="b.bgColor" :to="`/board/${b.id}`">
          <v-card-title ref="boardItem">{{b.title}}</v-card-title>
        </v-card>
      </v-flex>
      <v-flex xs2 sm2 class="pb-5 ma-5">
        <v-card @click.prevent="addBoard">
          <v-card-title>Create New Board...</v-card-title>
        </v-card>
      </v-flex>
    </v-layout>
    <AddBoard v-if="isAddBoard" @close="isAddBoard=false" @submit="onAddBoard"></AddBoard>
  </v-content>
</template>

<script>
import { board } from '../api'
import AddBoard from '../components/AddBoard'
export default {
  components: { AddBoard },
  data () {
    return {
      loading: false,
      boards: [],
      error: '',
      isAddBoard: false
    }
  },
  created () {
    this.fetchData()
  },
  methods: {
    fetchData () {
      board.fetch()
        .then(data => {
          this.boards = data.list
        })
        .finally(_ => {
          this.loading = false
        })
    },
    addBoard () {
      this.isAddBoard = true
    },
    onAddBoard (title) {
      board.create(title)
        .then(() => this.fetchData())
    }
  }
}
</script>
