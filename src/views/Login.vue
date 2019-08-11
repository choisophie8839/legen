<template>
  <v-content>
    <v-card width="400" class="mx-auto mt-5">
      <v-card-title class="pb-5">
        <h2>Login</h2>
      </v-card-title>
      <v-card-text>
        <v-form>
          <v-text-field
            label="Email"
            prepend-icon="mdi-account-circle"
            v-model="email"
            autofocus
          />
          <v-text-field
            :type="showPassword ? 'text' : 'password'"
            label="Password"
            prepend-icon="mdi-lock"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            v-model="password"
            @click:append="showPassword = !showPassword"
          />
        </v-form>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions>
        <v-btn color="success">Register</v-btn>
        <v-spacer></v-spacer>
        <v-btn color="info" :disabled="invalidForm" @click="onSubmit">Login</v-btn>
      </v-card-actions>
      <v-alert type="error" :value="Boolean(error)">
        {{this.error}}
      </v-alert>
    </v-card>
  </v-content>
</template>

<script>
import { auth, setAuthInHeader } from '../api'
export default {
  name: 'Login',
  data () {
    return {
      showPassword: false,
      email: '',
      password: '',
      rPath: '',
      error: ''
    }
  },
  computed: {
    invalidForm () {
      return !this.email || !this.password
    }
  },
  created () {
    this.rPath = this.$route.query.rPath || '/'
  },
  methods: {
    onSubmit () {
      auth.login(this.email, this.password)
        .then(data => {
          if (data === undefined) {
            this.error = 'Login Failure'
          } else {
            localStorage.setItem('token', data.accessToken)
            setAuthInHeader(data.accessToken)
            this.$router.push(this.rPath)
          }
        }).catch(err => {
          console.log(err)
        })
    }
  }
}
</script>

<style scoped>

</style>
