<template>
    <v-app>
      <v-content>
        <v-container fluid fill-height>
          <v-layout align-center justify-center>
            <v-flex xs12 sm8 md4>
              <v-card class="elevation-12">
                <v-toolbar color="primary" dark flat>
                  <v-toolbar-title>
                    Family Organizer Login
                  </v-toolbar-title>
                  <v-spacer></v-spacer>
                </v-toolbar>

                <v-card-text>
                  <v-form>
                    <v-text-field label="Login" prepend-icon="mdi-account-circle-outline" type="text"></v-text-field>
                    <v-text-field label="Password" prepend-icon="mdi-lock-outline" type="password"></v-text-field>
                  </v-form>
                </v-card-text>

                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="primary" @click="userAuthLogin">Login</v-btn>
                </v-card-actions>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-content>
    </v-app>
</template>

<script>
    export default {
      name: "users-login",
      layout: 'login',

      methods: {
        userAuthLogin () {
          this.$router.push({
            name: 'index'
          })
        }
      }
    }
</script>

<style scoped>

</style>
