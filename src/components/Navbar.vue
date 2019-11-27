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
import { mapGetters, mapMutations, mapState } from 'vuex'
export default {
  name: 'Navbar',
  computed: {
    ...mapState([
      'bodyColor',
      'navBarColor'
    ]),
    ...mapGetters([
      'isAuth'
    ])
  },
  watch: {
    'bodyColor': 'updateTheme'
  },
  mounted () {
    this.updateTheme()
  },
  methods: {
    ...mapMutations([
      'LOGOUT'
    ]),
    logout () {
      this.LOGOUT()
      this.$router.push('/login')
    },
    updateTheme () {
      this.$el.style.backgroundColor = this.navBarColor
      const container = document.querySelector('.container')
      const body = document.querySelector('.v-application--wrap')
      if (body) body.style.backgroundColor = this.bodyColor
      if (container) container.style.backgroundColor = this.bodyColor
    }
  }
}
</script>

<style scoped>

</style>
