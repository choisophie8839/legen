<template>
  <v-content>
    <v-layout>
      <h2>Board : {{board.title}}</h2>
    </v-layout>
    <v-layout row wrap>
      <v-flex x3 v-for="list in board.lists" :key="list.pos">
        <List :data="list"></List>
      </v-flex>
    </v-layout>
  </v-content>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import List from './List'
export default {
  name: 'Board',
  components: {
    List
  },
  data () {
    return {
      bid: 0,
      loading: true
    }
  },
  created () {
    this.fetchData()
  },
  computed: {
    ...mapState([
      'board'
    ])
  },
  methods: {
    ...mapActions([
      'FETCH_BOARD'
    ]),
    fetchData () {
      this.loading = true
      this.FETCH_BOARD({ id: this.$route.params.bid })
      // eslint-disable-next-line no-return-assign
        .then(() => this.loading = false)
    }
  }
}
</script>

<style scoped>

</style>
