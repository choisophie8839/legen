<template>
    <v-app-bar app color="primary" dark>
      <v-toolbar-title>
        Home
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text rounded to="/">Home</v-btn>
      <v-btn text rounded v-if="isAuth" @click.prevent="logout">Logout</v-btn>
      <v-btn text rounded v-else to="/login">Login</v-btn>
      <v-btn text rounded to="/about">About</v-btn>
    </v-app-bar>
</template>
<script>
import { setAuthInHeader } from '../api'
export default {
  name: 'Navbar',
  computed: {
    isAuth () {
      return !!localStorage.getItem('token')
    }
  },
  methods: {
    logout () {
      delete localStorage.token
      setAuthInHeader(null)
      this.$router.push('/login')
    }
  }
}
</script>

<style scoped>

</style>
