<template>
    <v-app-bar app color="primary" dark>
      <v-toolbar-title>
        Navbar
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text rounded to="/">Home</v-btn>
      <v-btn text rounded to="/login">Login</v-btn>
      <v-btn text rounded to="/about">About</v-btn>
    </v-app-bar>
</template>
<script>
export default {
  name: 'Navbar'
}
</script>

<style scoped>

</style>
