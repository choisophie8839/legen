<template>
  <v-card-text>
    {{data.title}}
  </v-card-text>
</template>

<script>
export default {
  name: 'CardItem',
  props: [
    'data'
  ]
}
</script>

<style scoped>

</style>
