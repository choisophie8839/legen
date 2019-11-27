<template>
  <v-card>
    <v-card-title>{{data.title}}</v-card-title>
    <div>
      <CardItem v-for="card in data.cards" :key="card.id" :data="card"></CardItem>
    </div>
    <v-card-text>
      <div v-if="isAddCard">
        <AddCard :listId="data.id" v-if="isAddCard" @close="isAddCard=false"></AddCard>
      </div>
      <div v-else>
        <v-icon @click="isAddCard=true">mdi-plus</v-icon>
        <a @click.prevent="isAddCard=true"> Add a Card...</a>
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
import AddCard from './AddCard'
import CardItem from './CardItem'
export default {
  name: 'List',
  props: [
    'data'
  ],
  components: {
    AddCard,
    CardItem
  },
  data () {
    return {
      isAddCard: false
    }
  }
}
</script>

<style scoped>

</style>
