<template>
  <v-content>
    <v-layout>
      <h2>{{board.title}}</h2>
      <v-spacer></v-spacer>
      <v-icon large color="white" @click.native="onShowSettings">mdi-menu</v-icon>
    </v-layout>
    <v-layout row wrap>
      <v-flex x3 class="ma-2" v-for="list in board.lists" :key="list.pos">
        <List :data="list"></List>
      </v-flex>
    </v-layout>
    <v-layout>
      <router-view></router-view>
      <BoardSettings v-if="isShowBoardSettings"></BoardSettings>
    </v-layout>
  </v-content>
</template>

<script>
import { mapActions, mapState, mapMutations } from 'vuex'
import List from './List'
import BoardSettings from './BoardSettings'
export default {
  name: 'Board',
  components: {
    List,
    BoardSettings
  },
  data () {
    return {
      bid: 0,
      loading: true
    }
  },
  created () {
    this.fetchData().then(() => {
      this.SET_THEME(this.board.bgColor)
    })
    this.SET_IS_SHOW_BOARD_SETTINGS(false)
  },
  computed: {
    ...mapState([
      'board',
      'isShowBoardSettings'
    ])
  },
  methods: {
    ...mapMutations([
      'SET_THEME',
      'SET_IS_SHOW_BOARD_SETTINGS'
    ]),
    ...mapActions([
      'FETCH_BOARD'
    ]),
    fetchData () {
      this.loading = true
      return this.FETCH_BOARD({ id: this.$route.params.bid })
      // eslint-disable-next-line no-return-assign
        .then(() => this.loading = false)
    },
    onShowSettings () {
      this.SET_IS_SHOW_BOARD_SETTINGS(true)
    }
  }
}
</script>

<style scoped>

</style>
