<template>
  <v-app>
    <v-container>
      <Navbar></Navbar>
    </v-container>
    <v-container>
      <router-view></router-view>
    </v-container>
  </v-app>
</template>

<script>
import Navbar from './components/Navbar'
export default {
  name: 'App',
  components: { Navbar }
}
</script>
