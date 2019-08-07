<template>
  <v-container>
    <v-layout>
      Card :
    </v-layout>
    <v-layout v-if="loading">Card Loading...</v-layout>
    <v-layout v-else>{{cid}}</v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'Card',
  data () {
    return {
      cid: 0,
      loading: false
    }
  },
  watch: {
    '$route': {
      handler: 'fetchData',
      immediate: true
    }
  },
  methods: {
    fetchData () {
      this.loading = true
      setTimeout(() => {
        this.cid = this.$route.params.cid
        this.loading = false
      }, 500)
    }
  }
}
</script>

<style scoped>

</style>
