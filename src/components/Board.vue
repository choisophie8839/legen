<template>
  <v-container>
    <v-layout>
      Board : {{bid}}
    </v-layout>
    <v-layout v-if="loading">Loading Board</v-layout>
    <v-layout v-else>
      <router-link :to="`/board/${bid}/card/1`">Card1</router-link>
      <router-link :to="`/board/${bid}/card/2`">Card2</router-link>
    </v-layout>
    <v-layout>
      <router-view></router-view>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'Board',
  data () {
    return {
      bid: 0,
      loading: true
    }
  },
  created () {
    this.fetchData()
  },
  methods: {
    fetchData () {
      this.loading = true
      setTimeout(() => {
        this.bid = this.$route.params.bid
        this.loading = false
      }, 500)
    }
  }
}
</script>

<style scoped>

</style>
